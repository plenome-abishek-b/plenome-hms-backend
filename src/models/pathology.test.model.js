var dbconn = require('../../config/db.config');
var PathologyTest = function(test){
    this.id = test.id;
    this.test_name = test.test_name;
    this.short_name = test.short_name;
    this.test_type = test.test_type;
    this.pathology_category_id = test.pathology_category_id;
    this.unit = test.unit;
    this.sub_category = test.sub_category;
    this.report_days = test.report_days;
    this.method = test.method;
    this.charge_id = test.charge_id;
    this.created_at = test.created_at;

}

let query = 'select pathology.*,pathology_category.category_name,tax_category.percentage,charges.standard_charge from pathology join pathology_category on pathology.pathology_category_id = pathology_category.id join charges on charges.id = pathology.charge_id join tax_category on tax_category.id = charges.tax_category_id';
let values = ['']
PathologyTest.setValues=(updatedquery,updatedvalues)=>{
    query = updatedquery;
    values = updatedvalues;
}

PathologyTest.getpathologytest = (result)=>{
    dbconn.query(query,values,(err,res)=>{
        if(err){
            console.log('error occured',err);
            result(null,err);
        }else{
            console.log('pathology test fetched');
            result(null,res);
        }
    })
}

PathologyTest.createpathologytest = (pathologydata,result)=>{
    dbconn.query('insert into pathology SET ?',pathologydata,(err,res)=>{
        if(err){
            console.log(err)
            console.log('error while inserting data');
            result(null,err);
        }else{
            console.log('pathology test data inserted successfully');
            result(null,res)

        }
    });
}

module.exports = PathologyTest; 