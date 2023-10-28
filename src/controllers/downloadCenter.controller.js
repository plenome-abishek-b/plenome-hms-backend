//const content = require('../MODELS/content.model');
const content_model = require('../models/downloadCenter.model');

exports.getcontent = (req,res)=>{
    let updatedquery = 'select * from contents'
    let updatedvalues = [];

    content_model.setquery(updatedquery,updatedvalues);
    content_model.getcontent((err,content)=>{
        if(err)
        res.send(err);

        console.log('contents fetched',content);
        res.send(content);
    })
}

exports.createcontent = (req,res)=>{
    const contentdata = new content_model(req.body);

    if(req.body.constructor === Object && Object(req.body).length ===0){
        res.send({success:false,message:'fill the details'});
    }else{
        content_model.createcontent(contentdata,(err,content)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:'content added successfully',data:content.insertId});
        })
    }
}