const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email : {
        type: String,
        required: true
    },
    password : {
        type : String,
        required: true
    },
    phone : {
        type: Number,
        required: true,
        joinedTime: {
            type: Date,
            default: Date.now()
        },
        role: {
            type: String,
            enum: ["admin", "student"],
            required: true
        }
    }
});

const User = mongoose.model("users", userSchema);
module.exports = User;
