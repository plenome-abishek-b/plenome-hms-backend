const DonorDetailsModel = require('../models/DonorDetails.model')

exports.createDonorDetails = (req,res)=>{


    const DonorDetailsData = new DonorDetailsModel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'please fill all fields'});
    }else{
        DonorDetailsModel.createDonorDetails (DonorDetailsData,(err,DonorDetails)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:'   Finding Category added successfully',data:DonorDetails.insertId});

        })
    }
}


exports.getDonorDetails= (req,res)=>{


   // let updatedQuery = 'select * from blood_donor '
   let updatedQuery = 'select blood_donor.id, blood_donor.donor_name,blood_donor.date_of_birth,blood_donor.gender,blood_donor.father_name,blood_donor.address,blood_donor.contact_no,blood_bank_products.name from blood_donor join blood_bank_products on blood_bank_products.id = blood_donor.blood_bank_product_id where blood_donor.id '
    let updatedValue = []
    if(req.query.search){
        updatedQuery += 'and blood_donor.donor_name like ? or blood_donor.gender like ? or blood_donor.father_name like ? or blood_donor.address like ? or blood_donor.contact_no like ? or blood_bank_products.name like ? '
        updatedValue.push('%'+req.query.search+'%')
        updatedValue.push('%'+req.query.search+'%')
        updatedValue.push('%'+req.query.search+'%')
        updatedValue.push('%'+req.query.search+'%')
        updatedValue.push('%'+req.query.search+'%')
        updatedValue.push('%'+req.query.search+'%')

    
    }
    
    DonorDetailsModel.setQuery(updatedQuery,updatedValue)
    DonorDetailsModel.getDonorDetails ((err,DonorDetails)=>{
            if(err)
            res.send(err);
         
            console.log('Donor Details ',DonorDetails);
            res.send(DonorDetails);
        })
    }