const mongoose = require("mongoose");

const interactionSchema = new mongoose.Schema({
    category : {
        type: String,
        enum : ["returned books",
            "browse available books", "borrow books"
            , '"view account details'],
        required: true
    },
    activityTime : {
        type: Date ,
        default: Date.now
    },
    admin : {
        type: mongoose.Schema.Types.ObjectId,
        ref : "users"
    },
    student : {
        type: mongoose.Schema.Types.ObjectId,
        ref : " users"
    },
    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref : " books"
    }
});
const  Interaction= mongoose.model("activities", interactionSchema);
module.exports = Interaction;