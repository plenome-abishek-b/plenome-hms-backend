const item_supplier = require('../models/inventory_item_supplier.model');
exports.getitem_supplier = (req,res)=>{

    item_supplier.getitem_supplier((err,supplier)=>{
        if(err)
        res.send(err);

        console.log('item_supplier added successfully',supplier);
        res.send(supplier);
    })
}

exports.createitem_supplier = (req,res)=>{
    const supplierdata = new item_supplier(req.body);
    if(req.body.constructor === Object && Object(req.body).length ===0){
        res.send({success:false,message:'fill the details'});
    }else{
        item_supplier.createitem_supplier(supplierdata,(err,supplier)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:'item supplier added successfully',data:supplier.insertId});
        })
    }
}