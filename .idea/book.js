const mongoose = require("mongoose")

const bookSchema = new  mongoose.Schema({
    title :{

    type: String,
    required: true,
},
        ISBN : {
        type : Number,
        required : true
    },
    discription:String,
    authors:String,
    category:String,

    availabilityStatus : {
        type: String,
        required : true,
    }

});