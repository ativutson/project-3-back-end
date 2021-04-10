const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tradeSchema = new Schema({
    symbol: String,
    tradeDate: Date,
    sellingDate: Date,
    quantity: Number,
    totalCost: Number,
    realized: Number,
    dividend: Number,
    avgPrice: Number,
    sellingPrice: Number,
    pAndL: Number,
    return: Number,
}, { timestamps: true });





module.exports = mongoose.model("Trade", tradeSchema);