const mongoose = require('mongoose');

const BrandNames = mongoose.Schema({
    brandName: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports =mongoose.model('brandName',BrandNames)