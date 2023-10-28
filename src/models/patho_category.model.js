var dbconn = require('../../config/db.config');
var category = function(pathology){
    this.id = pathology.id;
    this.category_name = pathology.category_name;
    this.created_at = pathology.created_at;
}

category.getpathology_category = (result)=>{
    dbconn.query('select * from pathology_category',(err,res)=>{
        if(err){
        console.log('error occured',err);
        result(null,err);
        }else{
            console.log('pathology category fetched');
            result(null,res);
        }
    })
}

category.createpathology_category = (category,result)=>{
    dbconn.query('insert into pathology_category SET ?',category,(err,res)=>{
        if(err){
            console.log('error while inserting data',err);
            result(null,err);
        }else{
            console.log('pathology_category inserted successfully');
            result(null,res);
        }
    })
}

module.exports = category;