var dbconn = require('../../config/db.config');
var category_name_radiology = function(name){
    this.id = name.id;

}

let query = '';
let values = ['']

category_name_radiology.setvalues = (updatedquery,updatedvalues)=>{
    query = updatedquery;
    values = updatedvalues;
}

category_name_radiology.get_category_name_radiology = (result)=>{
    dbconn.query(query,values,(err,res)=>{
        if(err){
            console.log('error occured',err);
            result(null,err);
        }else{
            console.log('category name is fetched');
            result(null,res);
        }
    })

}

module.exports = category_name_radiology;