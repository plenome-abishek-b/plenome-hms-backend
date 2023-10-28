var dbconn = require('../../config/db.config');
var radiology_category = function(radiology){
    this.id = radiology.id;
    this.lab_name = radiology.lab_name;
    this.created_at = radiology.created_at;
}

radiology_category.get_radiology_category = (result)=>{
    dbconn.query('select * from lab',(err,res)=>{
        if(err){
            console.log('error occured',err);
            result(null,err);
        }else{
            console.log('radiology category fetched');
            result(null,res);
        }
    })
}

radiology_category.create_radiology_category = (category,result)=>{
    dbconn.query('insert into lab SET ?',category,(err,res)=>{
        if(err){
            console.log('error while inserting data',err);
            result(null,err);
        }else{
            console.log('radiology_category inserted successfully');
            result(null,res);
        }
    })
}

module.exports = radiology_category;