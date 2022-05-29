const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pizzaSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    Filling: {
        type: String,
        required: true
    },
    Price: {
        type: Number,
        required: true
    }
},{timestamps: true});

const Pizza = mongoose.model('Pizza', pizzaSchema);
module.exports = Pizza;