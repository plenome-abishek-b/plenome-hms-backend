var dbConn = require('../../config/db.config');

var Birthrecord = function(birthrecord){
    this.id = birthrecord.id;
    this.child_name = birthrecord.child_name;
    this.child_pic = birthrecord.child_pic;
    this.gender = birthrecord.gender;
    this.birth_date = birthrecord.birth_date;
    this.weight = birthrecord.weight;
    this.patient_id = birthrecord.patient_id;
    this.case_reference_id = birthrecord.case_reference_id;
    this.contact = birthrecord.contact;
    this.mother_pic = birthrecord.mother_pic;
    this.father_name = birthrecord.father_name;
    this.father_pic = birthrecord.father_pic;
    this.birth_report = birthrecord.birth_report;
    this.document = birthrecord.document;
    this.address = birthrecord.address;
    this.is_active = birthrecord.is_active;
    this.created_at = birthrecord.created_at;
    
  }


//GET THE RECORD

  Birthrecord.getbirthrecord = (result)=>{
    dbConn.query(`SELECT
    CONCAT('BRRN', br.id) AS reference_no,
    br.case_reference_id AS case_reference_id,
    br.child_name AS child_name,
    br.gender AS gender,
    br.birth_date AS birth_date,
    br.patient_id AS patient_id,
    br.father_name AS father_name,
    br.birth_report AS birth_report,
    CONCAT(p.patient_name, ' (', br.patient_id, ')') AS \`Mother name\`
  FROM
    birth_report br
    INNER JOIN patients p ON br.patient_id = p.id`,
    (err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('birthrecord details fetched ');
            result(null,res);
        }
    })
}




//POST THE RECORD

Birthrecord.createbirthrecord= (birthrecorddata,result)=>{
    dbConn.query('insert into birth_report SET ?',birthrecorddata,(err,res)=>{
        if (err){
            console.log(err)
            console.log('Error while inserting data ');
            result(null,err);
        }else{
            console.log('birthrecord Data inserted Successfully');
            result(null,res)
        }
    
    });
}


//SEARCH BY NAME

Birthrecord.getrecordByname = (child_name,result)=>{
  dbConn.query('select id, case_reference_id,child_name, gender,birth_date,patient_id, father_name, birth_report from birth_report where child_name =?',[child_name],(err,res)=>{
      if(err){
          console.log('Error occured while getting by name',err);
          result(null,err);
      }else{
          console.log('record fetched by name');
          result(null,res);
      }
})
}


module.exports = Birthrecord;
