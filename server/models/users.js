const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    //boilerplate code
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        unique: true,
    },
});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;