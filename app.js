const express = require("express")
require('dotenv').config();
const app = express()
app.use(express.json())

const users = []
/**
 * Function gets the user data from an endpoint.
 * 
 */
app.post("/", (req, res)=>{
const userData = req.body;
console.log(userData);
res.json(req.body)
})


const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log(`Server listening at port ${port}`)
})