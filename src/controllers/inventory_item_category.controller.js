const item_category = require('../models/inventory_item_category.model');
const category = require('../models/patho_category.model');
exports.getitem_category = (req,res)=>{

    item_category.getitem_category((err,category)=>{
        if(err)
        res.send(err);

        console.log('item_category added successfully',category);
        res.send(category);
    })
}

exports.createitem_category = (req,res)=>{
    const categorydata = new item_category(req.body);

    if(req.body.constructor === Object && Object(req.body).length ===0){
        res.send({success:false,message:'fill the details'});
    }else{
        item_category.createitem_category(categorydata,(err,category)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:'item category added successfully',data:category.insertId});
        })
    }
}