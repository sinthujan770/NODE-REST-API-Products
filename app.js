const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if(req.method === 'OPTION'){
        res.header('Access-Control-Allow-Method', 
        'PUT,POST,PATCH,GET,DELETE');
        return res.status(200).json({});
    }
});



const productRoutes = require('./api/routes/products');
app.use('/products', productRoutes);

const orderRoutes = require('./api/routes/orders');
app.use('/orders', orderRoutes);


mongoose.connect('mongodb://127.0.0.1:27017/db',
{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log('connected');
});

mongoose.Promise = global.Promise;

app.use((req, res, next) => {
    const error = new Error('not found');
    error.status = 404;
    next(error);
})
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: { 
            message: error.message
        }
    });
});

module.exports = app;