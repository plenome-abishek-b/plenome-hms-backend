const productModel = require('../models/bloodbank.model');

exports.createProduct = (req,res)=>{
    const productData = new productModel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'please fill all fields'});
    }else{
        productModel.createProduct(productData,(err,product)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:' product added successfully',data:product.insertId});

        })
    }
}

exports.getProduct = (req,res)=>{
    productModel.getProduct((err,product)=>{
        if(err)
        res.send(err);
     
        console.log('product ',product);
        res.send(product);
    })
}



exports.updateProduct = (req, res) => {
    const id = req.params.id;
    const updatedProductData = new productModel(req.body);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).json({ success: false, message: 'Please fill all fields' });
    } else {
        productModel.updateProduct(id, updatedProductData, (err, product) => {
            if (err)
                res.send(err);
            res.status(200).json({ success: true, message: 'product updated successfully', data: product });
        });
    }
};

exports.deleteProduct = (req, res) => {
    const id = req.params.id;
    productModel.deleteProduct(id, (err, result) => {
        if (err)
            res.send(err);
        res.status(200).json({ success: true, message: 'product deleted successfully', data: result });
    });
};