const mongoose = require("mongoose")

// Artist Schema
const artistSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        match: /^[A-Zz-z0-9]+$/
    },
    phone_number: {
        type: String,
        required: true,
        match: /^254[0-9]{9}$/,
        maxLength: 12,
        minLength: 12
    },
    fans: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Fan' }],
    profilePicture:{
        type:String
    },
    coverImage:{
        type:String
    },
    description:{
        type:String
    },
    amount:{
        type:Number
    },
    withdrawals:{
        type:Number
    },
    artistname:{
        type: String
    }

});
//Creating a model
const Artist =mongoose.model("Artist", artistSchema)
module.exports =  Artist;