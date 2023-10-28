var dbConn = require('../../config/db.config');

var Charge = function(charge){
    this.id = charge.id;
    this.charge_category_id = charge.charge_category_id;
    this.tax_category_id = charge.tax_category_id;
    this.charge_unit_id = charge.charge_unit_id;
    this.name = charge.name;
    this.standard_charge = charge.standard_charge;
    this.date = charge.date;
    this.description = charge.description;
    this.status = charge.status;
    this.created_at = charge.created_at;
}

Charge.createCharge= (chargeData,result)=>{
    dbConn.query('insert into charges set ?',chargeData,(err,res)=>{
        if (err){
            console.log('Error while inserting data ');
            console.log(err);
            result(null,err);
        } else {
            console.log('charge category Data inserted Successfully');
            result(null,res)
        }
    })
}

Charge.getCharge= (result)=>{
    dbConn.query('select charges.*,charge_categories.name as cate_name,tax_category.name as tax_name,tax_category.percentage,charge_units.unit as unit_name,charge_type_master.charge_type as type_name from charges join charge_categories on charges.charge_category_id = charge_categories.id join tax_category on tax_category.id = charges.tax_category_id join charge_units on charge_units.id = charges.charge_unit_id join charge_type_master on charge_type_master.id = charge_categories.charge_type_id',(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('charges category  fetched ');
            result(null,res);
        }
    })
}
module.exports = Charge;
