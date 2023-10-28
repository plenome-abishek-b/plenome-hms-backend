const item_store = require('../models/inventory_item_store.model');
exports.getitem_store = (req,res)=>{

    item_store.getitem_store((err,store)=>{
        if(err)
        res.send(err);

        console.log('item_store added successfully',store);
        res.send(store);
    })
}

exports.createitem_store = (req,res)=>{
    const storedata = new item_store(req.body);
    console.log(storedata);
    if(req.body.constructor === Object && Object(req.body).length ===0){
        res.send({success:false,message:'fill the details'});
    }else{
        item_store.createitem_store(storedata,(err,store)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:'item store added successfully',data:store.insertId});
        })
    }
}