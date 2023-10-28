var bag_name_model = require('../models/bloodissuebagbilling.model');

exports.get_bag_name = (req,res)=>{
    let updatedquery = 'select * from blood_donor_cycle'
    let updatedvalues = [];

    if(req.query.test_name){
        updatedquery = 'select * from blood_donor_cycle'
        updatedvalues.push(req.query.bag_name_model);
    }

    bag_name_model.setvalues(updatedquery,updatedvalues);
    bag_name_model.get_bag_name((err,bag_no)=>{
        if(err)
        res.send(err);

        console.log('test name is needed',bag_no);
        res.send(bag_no);

    })
}