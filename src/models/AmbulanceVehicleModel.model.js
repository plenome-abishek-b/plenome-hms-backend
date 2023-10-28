var dbConn = require('../../config/db.config');

var VehicleModel = function(vehicleModel){
    this.id = vehicleModel.id
}


VehicleModel.getVehicles= (result)=>{
    dbConn.query('select vehicles.id,concat(vehicles.vehicle_no," - ",vehicles.vehicle_model) as vehicle_model from vehicles',(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('vehicles fetched ');
            result(null,res);
        }
    })
}
module.exports = VehicleModel