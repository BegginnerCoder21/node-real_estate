const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type : String,
        required : true,
    },
    email: {
        type : String,
        required : true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 6
    },
    profilImg: {
        type: String,
        default: ""
    }
},{timestamps: true});

const User = mongoose.model('User',UserSchema);

return User;