const consultant_register_model = require('../models/ipd_consultant_register.model')

exports.create_consultant_register = (req,res)=>{
    const consultant_register_data = new consultant_register_model(req.body);
        if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
            res.send({success:false,message:'please fill all fields'});
        }else{
            consultant_register_model.create_consultant_register(consultant_register_data,(err,consultant_register)=>{
                if(err)
                res.send(err);
                res.json({status:true,message:' medication added successfully',data:consultant_register.insertId});
    
            })
        }
}

exports.get_constultant_register = (req,res)=>{
    consultant_register_model.get_consultant_register((err,consultant_register)=>{
        if(err)
        res.send(err);
     
        console.log('consultant_register ',consultant_register);
        res.send(consultant_register);
        })
    }

