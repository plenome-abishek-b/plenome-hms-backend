var dbconn = require('../../config/db.config');
var RadiologyTest = function(test){
    this.id = test.id;
    this.test_name = test.test_name;
    this.short_name = test.short_name;
    this.test_type = test.test_type;
    this.radiology_category_id = test.radiology_category_id;
    this.sub_category = test.sub_category;
    this.report_days = test.report_days;
    this.charge_id = test.charge_id;
    this.created_at = test.created_at;
    
}

let query = 'select * from radiology';
let values = ['']
RadiologyTest.setvalues = (updatedquery,updatedvalues)=>{
    query = updatedquery;
    values = updatedvalues;
}

RadiologyTest.getradiologytest = (result)=>{
    dbconn.query(query,values,(err,res)=>{
        if(err){
            console.log('error occured',err);
            result(null,err);

        }else{
            console.log('radiology test fetched');
            result(null,res);
        }
    })
}

RadiologyTest.createradiologytest = (radiologydata,result)=>{
    dbconn.query('insert into radio SET ?', radiologydata,(err,res)=>{
        if(err){
            console.log(err)
            console.log('error while inserting data');
            result(null,err);
        }else{
            console.log('radiology test data inserted successfully');
            result(null,res)

        }
    })
}

module.exports = RadiologyTest;