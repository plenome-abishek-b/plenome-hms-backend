var dbCon = require('../../config/db.config');

var FrontOfficeVisitorsBook = function(frontofficevisitorsbook) {
this.source = frontofficevisitorsbook.source;
this.purpose = frontofficevisitorsbook.purpose;
this.name = frontofficevisitorsbook.name;
this.email = frontofficevisitorsbook.email;
this.contact = frontofficevisitorsbook.contact;
this.id_proof = frontofficevisitorsbook.id_proof;
this.visit_to = frontofficevisitorsbook.visit_to;
this.ipd_opd_staff_id = frontofficevisitorsbook.ipd_opd_staff_id;
this.related_to = frontofficevisitorsbook.related_to;
this.no_of_pepple = frontofficevisitorsbook.no_of_pepple;
this.date = frontofficevisitorsbook.date;
this.in_time = frontofficevisitorsbook.in_time;
this.out_time = frontofficevisitorsbook.out_time;
this.note = frontofficevisitorsbook.note;
this.image = frontofficevisitorsbook.image;
this.created_at = frontofficevisitorsbook.created_at;
}




//Add new visitors details

FrontOfficeVisitorsBook.createVisitorsBook = (patientReqData,result) =>{
    dbCon.query('INSERT INTO visitors_book SET ?',patientReqData,(err,res)=>{
    if(err){
        console.log('Error while inserting data');
        console.log(err);
        result(null,err);
    }
    else{
        console.log('Visitors details created successfully')
        result(null,res);
    }
    })
    }


    //get visitors detail list

    FrontOfficeVisitorsBook.getVisitorsBookList = (result) => {
dbCon.query('SELECT * FROM visitors_book',(err,res)=>{
if(err){
    console.log('Error while fetching Visitors details',err);
    result(null,err);
}
else{
    console.log('Visitors details fetched successfully');
    result(null,res);
}
});
}



module.exports = FrontOfficeVisitorsBook;