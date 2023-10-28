const AmbulanceVehicleModel = require('../models/AmbulanceVehicleModel.model');

exports.getVehicles = (req,res)=>{
    AmbulanceVehicleModel.getVehicles((err,vehicles)=>{

      
        if(err)
        res.send(err);
     
        console.log('vehicles ',vehicles);
        res.send(vehicles);
    
    })
}