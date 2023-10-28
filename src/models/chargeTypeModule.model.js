var dbConn = require('../../config/db.config');
var chargeTypeModule = function(chargeTypeModule){
    this.id = chargeTypeModule.id;
    this.charge_type_master_id = chargeTypeModule.charge_type_master_id;
    this.module_shortcode = chargeTypeModule.module_shortcode;
    this.created_at = chargeTypeModule.created_at;
}
chargeTypeModule.getModule = (result)=>{
    dbConn.query('select * from charge_type_module ',(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('charge_type_module details  fetched ');
            result(null,res);
        }
    })
}


chargeTypeModule.createModule= (moduleData,result)=>{
    const values = moduleData.map((data)=>{

        return[
          //  data.id,
            data.charge_type_master_id,
            data.module_shortcode,
            data.created_at
        ];
    })
    dbConn.query('insert into charge_type_module (charge_type_master_id, module_shortcode, created_at) values ?', [values], (err,res)=>{
        if (err){
            console.log(err)
            console.log('Error while inserting data ');
            result(null,err);
        }else{
            console.log('charge_type_module Data inserted Successfully');
            // return the inserted detail objects
            console.log(res,"sssss");
            result(null, moduleData);
        }
    
    });
}

// let query = '';
// let values = [];

// chargeTypeModule.updateModule = (moduleUpdateData,result) =>{
//     dbConn.query(
//         "UPDATE charge_type_module SET charge_type_master_id=?,module_shortcode=?,created_at=? WHERE id=?", [moduleUpdateData.email,moduleUpdateData.country_code,moduleUpdateData.mobile_number,moduleUpdateData.password,moduleUpdateData.patient_typeid],(err,res)=>{
//             if(err){
//                 console.log('Error while updating patient');
//                 result(null,err);
//             }
//             else{
//                 console.log('Patient updated successfully')
//                 result(null,res);
//             }
//         }
//     )
// }

module.exports = chargeTypeModule;