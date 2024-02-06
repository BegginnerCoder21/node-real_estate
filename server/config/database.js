const mongoose = require('mongoose');

const ConnectDB = async() => {
    try {

       await mongoose.connect(process.env.MONGODB_URL);

    } catch (error) {
        console.log(error);
    }
}

module.exports = ConnectDB;