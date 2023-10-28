const staffusermodel = require('../models/userDetails.model');
exports.getstaffuserdetails = (req,res)=>{
    staffusermodel.getstaffuserdetails ((err,staff)=>{
        if(err)
        res.send(err);

        console.log('user details',staff);
        res.send(staff);
    })
}