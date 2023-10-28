var dbConn = require('../../config/db.config');
var Timeline = function(timeline){
    this.id = timeline.id;
    this.patient_id = timeline.patient_id;
    this.title = timeline.title;
    this.timeline_date = timeline.timeline_date;
    this.description = timeline.description;
    this.document = timeline.document;
    this.status = timeline.status;
    this.date= timeline.date;
    this.generated_users_type = timeline.generated_users_type;
    this.generated_users_id = timeline.generated_users_id;
    this.created_at = timeline.created_at;

}

Timeline.crateTimeline = (timelineData,result)=>{
    dbConn.query('insert into patient_timeline SET ?',timelineData,(err,res)=>{
        if (err){
            console.log(err)
            console.log('Error while inserting data ');
            result(null,err);
        }else{
            console.log('timeline Data inserted Successfully');
            result(null,res)
        }
    });

}
Timeline.getTimeline = (result)=>{
    dbConn.query('SELECT * FROM patient_timeline',(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('patient_timeline fetched ');
            result(null,res);
        }
    })
}
module.exports = Timeline;