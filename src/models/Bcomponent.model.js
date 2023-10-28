var dbConn = require('../../config/db.config');
var B_Components = function(b_Components){
    this.id = b_Components.id;
}

B_Components.getComponents = (result)=>{
    dbConn.query("select * from blood_bank_products where is_blood_group = 1",(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('Components  fetched ');
            result(null,res);
        }
    })
}
module.exports = B_Components;