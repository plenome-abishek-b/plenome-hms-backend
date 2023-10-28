const list_leaves = require('../models/staff_leave.model');

exports.getleavelist = (req,res)=>{
    list_leaves.getleaves((err,list_leave)=>{
        if(err)
        res.send(err);

        console.log('approved leave is needed',list_leave);
        res.send(list_leave);
    })
}

exports.create_leave_list = (req,res)=>{
    const list_leave = new list_leaves(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'fill the details'});
    }else{
        list_leaves.createleaves(list_leave,(err,request)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:'leave list added successfully',data:request.insertId});
        })   
}
}