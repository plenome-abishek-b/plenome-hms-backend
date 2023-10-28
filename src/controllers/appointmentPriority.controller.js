const AppointmentPriorityModel = require('../models/appointmentPriority.model');
exports.getPriority = (req,res)=>{
    AppointmentPriorityModel.getPriority((err,priority)=>{

      
        if(err)
        res.send(err);
     
        console.log('priority ',priority);
        res.send(priority);
    
    })
}