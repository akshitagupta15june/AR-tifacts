const mongoose = require('mongoose')
const { Schema } = mongoose;

const VendorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    streetAddress: {
        type: String,
        required: true
    },
    landmark: {
        type: String,
        required: true
    },
    contactNumber: {
        type: Number,
        required: true
    },
    companyRegisterationNumber: {
        type: Number,
        required: true
    },
    //ProductDetails:{
    //  type: String,
      //  required: true
    //}
});

module.exports = mongoose.model('vendor', VendorSchema)