var dbConn = require('../../config/db.config');

var Referral_person = function(referralperson){
    this.name = referralperson.name;
    this.category_id = referralperson.category_id;
    this.contact = referralperson.contact;
    this.person_name = referralperson.person_name;
    this.person_phone = referralperson.person_phone;
    this.standard_commission = referralperson.standard_commission;
    this.address = referralperson.address;
    this.is_active = referralperson.is_active;
    this.created_at = referralperson.created_at;
    
    }


//GET THE RECORD

Referral_person.getreferralperson = (result)=>{
    dbConn.query(`SELECT
    rp.name,
    GROUP_CONCAT(CONCAT(rt.name, ' - ', RPC.commission, '%') ORDER BY rc.name SEPARATOR '\n') AS commission,
    rc.name AS category_name,
    rp.contact AS referralcontact,
    rp.person_name AS contactpersonname,
    rp.person_phone AS contactpersonphone,
    rp.address
FROM referral_person rp
LEFT JOIN referral_category rc ON rp.category_id = rc.id
LEFT JOIN referral_person_commission RPC ON rp.id = RPC.referral_person_id
LEFT JOIN referral_type rt ON RPC.referral_type_id = rt.id
GROUP BY rp.name, rc.name, rp.contact, rp.person_name, rp.person_phone, rp.address`,(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('referralperson details fetched');
            result(null,res);
        }
    })
}


//POST THE RECORD

Referral_person.createreferralperson = (referraldata,result)=>{
    dbConn.query('insert into referral_person SET ?',referraldata,(err,res)=>{
        if (err){
            console.log(err)
            console.log('Error while inserting data ');
            result(null,err);
        }else{
            console.log('referralperson Data inserted Successfully');
            result(null,res)
        }
    
    });
}


// SEARCH BY NAME_name

Referral_person.getreferralpersonByname = (name,result)=>{
  dbConn.query('select * from referral_person where name = ?',[name],(err,res)=>{
      if(err){
          console.log('Error occured while getting by name',err);
          result(null,err);
      }else{
          console.log('record fetched by name');
          result(null,res);
      }
})
}


module.exports = Referral_person;