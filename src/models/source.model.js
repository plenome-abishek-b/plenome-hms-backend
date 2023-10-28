var dbConn = require('../../config/db.config');
var Source = function(source){
    this.id = source.id;
    this.source = source.source;
    this.description = source.description;
    this.created_at = source.created_at;
}
Source.createSource = (sourceData,result)=>{
    dbConn.query('insert into source SET ?',sourceData,(err,res)=>{
        if (err){
            console.log(err)
            console.log('Error while inserting data ');
            result(null,err);
        }else{
            console.log('source Data inserted Successfully');
            result(null,res)
        }
    });
}

Source.getSource = (result)=>{
    dbConn.query('SELECT * FROM source',(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('source fetched ');
            result(null,res);
        }
    })
}
module.exports = Source;