const express = require('express');
const router = express.Router();

const Product = require('../models/product');
const { Mongoose } = require('mongoose');
const { request } = require('express');

router.get('/',(req, res, next) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    };
    res.status(200).json({
        message: 'get requist',
        Createproduct: product
    });
});

router.patch('/',(req, res, next) => {
    res.status(200).json({
        message: 'get requist'
    });
});

router.post('/',(req, res, next) => {
    res.status(200).json({
        message: 'post requist'
    });
});

router.get('/:productId',(req, res, next) => {
    const id = req.params.productId;
    if(id === '333')
    {
        res.status(200).json({
        message:'you got id product'
        });
    }
    else{
    res.status(200).json({
        message: 'get requist'
    
    });
}
});
module.exports = router;