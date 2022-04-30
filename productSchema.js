const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    sku: {
        type: String,
        required : "true"
    },
    name: {
        type: String,
        required : "true"
    },
    price: {
        type: String,
        required : "true"
    },
    productType: {
        type: String,
        required : "true"
    },
    productValue: {
        type: String,
    }
        
}, {timestamps : true})

const Product = mongoose.model('Product', productSchema)

module.exports = Product;