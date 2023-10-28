var dbConn = require('../../config/db.config');

var Deathrecord = function(deathrecord){
    this.id = deathrecord.id;
    this.patient_id = deathrecord.patient_id;
    this.case_reference_id = deathrecord.case_reference_id;
    this.attachment = deathrecord.attachment;
    this.attachment_name = deathrecord.attachment_name;
    this.death_date = deathrecord.death_date;
    this.guardian_name = deathrecord.guardian_name;
    this.death_report = deathrecord.death_report;
    this.is_active = deathrecord.is_active;
    this.created_at = deathrecord.created_at;
    
    }


//GET THE RECORD

Deathrecord.getdeathrecord = (result)=>{
    dbConn.query(`SELECT
    CONCAT('DRRN', br.id) AS reference_no,
    br.case_reference_id AS case_reference_id,
    CONCAT(p.patient_name, ' (', br.patient_id, ')') AS \`Patient name\`,
    br.guardian_name AS guardian_name,
    p.gender AS gender,
    br.death_date AS death_date,
    br.death_report AS death_report
  FROM
    death_report br
    INNER JOIN patients p ON br.patient_id = p.id`
  ,(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('deathrecord details fetched ');
            result(null,res);
        }
    })
}


//POST THE RECORD

Deathrecord.createdeathrecord= (deathrecorddata,result)=>{
    dbConn.query('insert into death_report SET ?',deathrecorddata,(err,res)=>{
        if (err){
            console.log(err)
            console.log('Error while inserting data ');
            result(null,err);
        }else{
            console.log('deathrecord Data inserted Successfully');
            result(null,res)
        }
    
    });
}


// SEARCH BY NAME_patient_id

Deathrecord.getrecordByname = (patient_id,result)=>{
  dbConn.query('select id,case_reference_id,patient_id, guardian_name,death_date, death_report from death_report where patient_id = ?',[patient_id],(err,res)=>{
      if(err){
          console.log('Error occured while getting by name',err);
          result(null,err);
      }else{
          console.log('record fetched by name');
          result(null,res);
      }
})
}


module.exports = Deathrecord;


