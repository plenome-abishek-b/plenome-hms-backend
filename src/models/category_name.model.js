var dbconn = require('../../config/db.config');
var category_name = function(name){
    this.id = name.id;
}

let query = '';
let values = ['']

category_name.setvalues = (updatedquery,updatedvalues)=>{
    query = updatedquery;
    values = updatedvalues;
}

category_name.get_category_name = (result)=>{
    dbconn.query(query,values,(err,res)=>{
        if(err){
            console.log('error occured',err);
            result(null,err);
        }else{
            console.log('category name fetched');
            result(null,res);
        }
    })
}

module.exports = category_name;