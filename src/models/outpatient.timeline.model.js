var dbCon = require('../../config/db.config');

var Timeline = function(timeline) {
this.patient_id = timeline.patient_id;
this.title = timeline.title;
this.timeline_date = timeline.timeline_date;
this.description = timeline.description;
this.document = timeline.document;
this.status = timeline.status;
this.date = timeline.date;
this.generated_users_type = timeline.generated_users_type;
this.generated_users_id = timeline.generated_users_id;
this.created_at = timeline.created_at;
}




//Add new timeline

Timeline.createTimeline = (patientReqData,result) =>{
    dbCon.query('INSERT INTO patient_timeline SET ?',patientReqData,(err,res)=>{
    if(err){
        console.log('Error while inserting data');
        result(null,err);
    }
    else{
        console.log('Patient timeline created successfully')
        result(null,res);
    }
    })
    }



    //get all patients timeline list

    Timeline.getAllPatientsTimeline = (result) => {
    dbCon.query('SELECT * FROM patient_timeline',(err,res)=>{
    if(err){
        console.log('Error while fetching patients timeline',err);
        result(null,err);
    }
    else{
        console.log('Patients timeline fetched successfully');
        result(null,res);
    }
    });
    }



module.exports = Timeline;