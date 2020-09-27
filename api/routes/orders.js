const express = require('express');
const router = express.Router();
const Mongoose  = require('mongoose');


router.get('/',(req, res, next) => {
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity
    };
    
    res.status(200).json({
        message: 'get requiest from order',
        ordereddetails:order
    });
});

router.post('/',(req, res, next) => {
    res.status(200).json({
        message: 'post requist from order'
    });
});

router.get('/:orderId',(req, res, next) => {
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

router.delete('/:orderId',(req, res, next) => {
   
        res.status(200).json({
        message:'you deleted id product',
        orderId: req.params.orderId
        });
    
    

});
module.exports = router;