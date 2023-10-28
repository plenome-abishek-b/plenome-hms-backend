const AmbulancelistModel = require('../models/ambulancecallpost.model');



exports.createambulancelist = (req,res)=>{
  const ambulanceData = new AmbulancelistModel(req.body);
  if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
      res.send({success:false,message:'please fill all fields'});
  }else{
    AmbulancelistModel.createambulancelist(ambulanceData,(err,ambulancelist)=>{
          if(err)
          res.send(err);
          res.json({status:true,message:'  Ambulance Data added successfully',data:ambulancelist.insertId});

      })
  }
}