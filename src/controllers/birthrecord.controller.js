const birthrecordmodel = require('../models/birthrecord.model');
exports.getbirthrecord = (req,res)=>{
    birthrecordmodel.getbirthrecord ((err,birthrecord_list)=>{
        if(err)
        res.send(err);
     
        console.log('birthrecord_list ',birthrecord_list);
        res.send(birthrecord_list);
    })
}


exports.createbirthrecord =(req,res)=>{
    const birthrecord_data = new birthrecordmodel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'please fill all fields'});
    }else{
        birthrecordmodel.createbirthrecord(birthrecord_data,(err,birthrecord_list)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:' record added successfully',data:birthrecord_list.insertId});

        })
    }
}


exports.getrecordByname = (req,res) =>{
  console.log('get record by child_name');
  birthrecordmodel.getrecordByname(req.params.child_name,(err, record)=>{
       
      if(err)
          res.send(err);
         
          console.log('Single record',record);
          res.send(record[0]);
      })
}