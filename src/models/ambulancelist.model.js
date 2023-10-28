var dbconn = require('../../config/db.config');
var Ambulancelist = function (ambulancelist){
    
    this.vehicle_no = ambulancelist.vehicle_no;
    this.vehicle_model = ambulancelist.vehicle_model;
    this.manufacture_year = ambulancelist.manufacture_year;
    this.driver_name = ambulancelist.driver_name;
    this.driver_licence = ambulancelist.driver_licence;
    this.driver_contact = ambulancelist.driver_contact;
    this.note = ambulancelist.note;
    this.vehicle_type = ambulancelist.vehicle_type;
   
}


//GET THE AMBULANCE


Ambulancelist.getAmbulancelist = (result)=>{
    dbconn.query('SELECT vehicle_no, vehicle_model, manufacture_year, driver_name, driver_licence, driver_contact, note, vehicle_type from vehicles',(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('ambulancelist  fetched ');
            result(null,res);
        }
    })
}


// post the values in ambulance table

Ambulancelist.createambulancelist = (ambulanceData,result)=>{
  dbconn.query('insert into vehicles SET ?',ambulanceData,(err,res)=>{
      if (err){
          console.log(err)
          console.log('Error while inserting data ');
          result(null,err);
      }else{
          console.log('ambulance Data inserted Successfully');
          result(null,res)
      }
  
  });
}

module.exports = Ambulancelist;