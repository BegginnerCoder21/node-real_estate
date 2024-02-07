const mongoose = require('mongoose');

const PropertySchema = mongoose.Schema({
    currentOwner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true,
        min: 8,
    },
    type: {
        type: String,
        enum: ["Montagne","Plage","Village"],
        required: true
    },
    description: {
        type: String,
        required: true,
        min: 20
    },
    img: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    squareMeters: {
        type : String,
        required: true
    },
    continent:  {
        type : String,
        required: true
    },
    beds: {
        type : Number,
        required: true,
        min: 2
    },
    features: {
        type: Boolean,
        required: true,
        default: false
    }
},{timestamps: true});

const Property = mongoose.model('Property',PropertySchema);

module.exports = Property