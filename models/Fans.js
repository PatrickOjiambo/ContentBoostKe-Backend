const mongoose = require("mongoose")

//Fans Schema
const fanSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    message: {
        type: String,
        maxLength: 400
    },
    amount: {
        type: String,
        required: true
    },
    artists: [{ type: mongoose.Schema.Types.ObjectId, ref: "Fan" }]
})

//Creating Fan model
const Fan = mongoose.model("Fan", fanSchema);
module.exports = Fan;
