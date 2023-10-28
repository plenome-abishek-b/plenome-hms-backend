var dbconn = require('../../config/db.config');
var referralCategory = function(cate){
    this.id = cate.id;
}

let query = '';
let values = ['']

referralCategory.setvalues = (updatedquery,updatedvalues)=>{
    query = updatedquery;
    values = updatedvalues
}

referralCategory.getReferralCategoryName = (result)=>{
    dbconn.query(query,values,(err,res)=>{
        if(err){
            console.log('error occured',err);
            result(null,err);
        }else{
            console.log('category fetched');
            result(null,res);

        }
    })
}



module.exports = referralCategory;