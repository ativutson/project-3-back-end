// require our modules
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const corsOptions = require('./configs/cors.js');
NODE_ENV === "production" ? app.use(cors(corsOptions)) : app.use(cors());
// const corsOptions = {origin: "https://trade-log.netlify.app/"}
// initialize the express app
const app = express();

// configure settings app.set()

require('dotenv').config();
require('./config/database');


// mount middleware with app.use()
app.use(morgan('dev'));
app.use(express.json()); // converts incoming json into req.body
app.use(cors());

app.use('/api/trades', require('./routes/api/trades'));


const port = process.env.PORT || 3002;

app.listen(port, function() {
    console.log(`Express is listening for AJAX requests on port ${port}`);
});