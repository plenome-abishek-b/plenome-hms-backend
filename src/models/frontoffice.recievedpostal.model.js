var dbCon = require('../../config/db.config');

var FrontOfficeRecievedPostal = function(frontofficerecievedpostal) {
this.reference_no = frontofficerecievedpostal.reference_no;
this.to_title = frontofficerecievedpostal.to_title;
this.address = frontofficerecievedpostal.address;
this.note = frontofficerecievedpostal.note;
this.from_title = frontofficerecievedpostal.from_title;
this.date = frontofficerecievedpostal.date;
this.image = frontofficerecievedpostal.image;
this.type = frontofficerecievedpostal.type;
this.created_at = frontofficerecievedpostal.created_at;
}




//Add new call log details

FrontOfficeRecievedPostal.createRecievedPostal = (patientReqData,result) =>{
    dbCon.query('INSERT INTO dispatch_receive SET ?',patientReqData,(err,res)=>{
    if(err){
        console.log('Error while inserting data');
        console.log(err);
        result(null,err);
    }
    else{
        console.log('Recieved postal details created successfully')
        result(null,res);
    }
    })
    }


    //get call log detail list

    FrontOfficeRecievedPostal.getRecievedPostalList = (result) => {
        let type='receive';
dbCon.query('SELECT * FROM dispatch_receive WHERE type=?',type,(err,res)=>{
if(err){
    console.log('Error while fetching Recieved postal',err);
    result(null,err);
}
else{
    console.log('Recieved postal details fetched successfully');
    result(null,res);
}
});
}



module.exports = FrontOfficeRecievedPostal;