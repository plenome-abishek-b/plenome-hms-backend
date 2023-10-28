var dbConn = require('../../config/db.config');

var TaxCaegory = function(taxCategory){
    this.id = taxCategory.id;
    this.name = taxCategory.name;
    this.percentage = taxCategory.percentage;
    this.created_at = taxCategory.created_at;
}

TaxCaegory.createTax = (taxData,result)=>{
    dbConn.query('insert into tax_category set ?',taxData,(err,res)=>{
        if (err){
            console.log('Error while inserting data ');
            console.log(err);
            result(null,err);
        } else {
            console.log('tax category Data inserted Successfully');
            result(null,res)
        }
    })
}

TaxCaegory.getTax= (result)=>{
    dbConn.query('select * from tax_category',(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('tax category  fetched ');
            result(null,res);
        }
    })
}
module.exports = TaxCaegory;
