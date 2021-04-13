const Trade = require('../models/trade');

async function index(req, res) {
    try {
        const trades = await Trade.find({});
        res.status(200).json(trades);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'something went wrong' });
    }
 }
 
 async function create(req, res) {
     try {
         const trade = await Trade.create(req.body);
         req.query = trade;
         index(req, res);
     } catch (error) {
         res.status(401).json({ error: 'something went wrong' });
     }
 }
 
 async function deleteTrade(req, res) {
     try {
         const deletedTrade = await Trade.findByIdAndDelete(req.params.id);
         req.query = deletedTrade;
         index(req, res);
     } catch (error) {
         res.status(401).json({ error: 'something went wrong' });
     }
 }
 
 
 async function update(req, res) {
     try {
         const updatedTrade = await Trade.findByIdAndUpdate(
             req.params.id, req.body, { new: true }
             );
             req.query = updatedTrade;
             index(req, res);
         } catch (error) {
             res.status(401).json({ error: 'something went wrong' });
     }
 }
 
 module.exports = {
     index,
     create,
     delete: deleteTrade,
     update
 };