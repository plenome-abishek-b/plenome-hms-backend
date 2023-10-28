var test_parameter_name = require('../models/test_parameter_name.model');

exports.get_test_parameter_name = (req,res)=>{
    let updatedquery = 'select * from pathology_parameter'
    let updatedvalues = [];

    if(req.query.name){
        updatedquery = 'select * from pathology_parameter where pathology_parameter.id = ?'
        updatedvalues.push(req.query.name);
    }

    test_parameter_name.setvalues(updatedquery,updatedvalues);
    test_parameter_name.get_test_parameter_name((err,name)=>{
        if(err)
        res.send(err);

        console.log('test parameter name is needed',name);
        res.send(name);
    })
}