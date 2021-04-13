const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tradeSchema = new Schema({
    no: Number,
    symbol: String,
    tradeDate: Date,
    sellingDate: Date,
    days: Number,
    lOrS: String,
    quantity: Number,
    totalCost: Number,
    totalRevenue: Number,
    dividend: Number,
    avgPrice: Number,
    sellingPrice: Number,
    pAndL: Number,
    returns: Number,
}, { timestamps: true });





module.exports = mongoose.model("Trade", tradeSchema);