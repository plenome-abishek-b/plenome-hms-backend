var dbConn = require('../../config/db.config');
var PrefixSettings = function(prefixSettings){
    this.id = prefixSettings.id;
    this.prefix = prefixSettings.prefix;
}
let query = ''
let value = []

PrefixSettings.setQuery = (updatedQuery,updatedValues)=>{
    query = updatedQuery;
    value = updatedValues
}


PrefixSettings.getPrefixSettings = (result)=>{
    dbConn.query(query,value,(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('Prefix Settings  fetched ');
            result(null,res);
        }
    })
}


PrefixSettings.updatePrefixSettings = (PrefixSettingData,result)=>{
    dbConn.query(query,[PrefixSettingData,value],(err,res)=>{
        if (err){
            console.log(err)
            console.log('Error while inserting data ');
            result(null,err);
        }else{

            console.log(query);
            console.log(value,"vvvvv");
            console.log(PrefixSettingData,"uuuuuuu");
            console.log('Prefix Settings Data updated Successfullyyyyy');
            result(null,res)
        }
    });
}
module.exports = PrefixSettings;
