const express = require("express")
const cors = require("cors")
const axios = require("axios")
const moment = require("moment")
const app = express()

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }));


//Middleware function to generate token
const generateToken = async (req, res, next) => {
    const secret = process.env.CONSUMER_SECRET
    const consumer = process.env.CONSUMER_KEY
    const auth = new Buffer.from(`${consumer}:${secret}`).toString("base64")

    await axios.get("https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest", {
        headers:{
            Authorization: "Bearer QTZmSzEyeDNLUFl5NkpCeEg3R29ieEE1RkNHWUdMa206dWZCUmVJYVY1WUwxSTdtWg=="
        }
    }).then((response)=>{
        console.log(response.data.access_token)
        token = response.data.access_token
        next()
        }).catch((err)=>{
            console.log("Error occured in access token")
            console.log(err)
            res.status(400).json(err.message)
        })
}


app.post("/stk", generateToken, async (req, res) => {
    const phone_number = req.body.phone_number.substring(1);
    const amount = req.body.amount
    res.json({ phone_number, amount })
    let timestamp = moment().format("YYYYMMDDHHmmss");
    const shortcode = process.env.C2B_MPESA_SHORTCODE;
    const passkey = process.env.C2B_MPESA_PASSKEY;
    const password = new Buffer.from(shortcode + passkey + timestamp).toString("base64")


    await axios.post(
        "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",

        {
            "BusinessShortCode": "174379",
            "Password": password,
            "Timestamp": timestamp,
            "TransactionType": "CustomerBuyGoodsOnline",
            "Amount": "1",
            "PartyA": `254${phone_number}`,
            "PartyB": shortcode,
            "PhoneNumber": `254${phone_number}`,
            "CallBackURL": "https://mydomain.com/pat",
            "AccountReference": "0742220881",
            "TransactionDesc": "0742220881"
        },
        {
            headers: {
                Authorization: `Bearer${token}`
            }
        }


    ).then((data) => {
        console.log(data)
        res.status(200).json(data)
    }).catch((err) => {
        console.log(err.data)
        res.status(400).json(err.message)
    })
})
app.get("/", (req, res) => {
    res.send("Pash you are the greatest.")
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`App listening at port ${port}`)
})
