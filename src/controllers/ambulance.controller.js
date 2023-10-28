const AmbulanceModel = require('../models/ambulance.model');
exports.getAmbulance = (req,res)=>{
  AmbulanceModel.getAmbulance ((err,ambulance)=>{
        if(err)
        res.send(err);
     
        console.log('ambulance ',ambulance);
        res.send(ambulance);
    })
}


exports.getAmbulanceByID = (req,res) =>{
  console.log('get ambulance by id');
  AmbulanceModel.getAmbulanceByID(req.params.id,(err, ambulance)=>{
       
      if(err)
          res.send(err);
         
          console.log('Single Ambulance',ambulance);
          res.send(ambulance[0]);
      })
}