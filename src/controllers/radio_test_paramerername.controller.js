const test_parameter_name = require('../models/radio_test_parametername.model');
var test_parameter_name_radiology = require('../models/radio_test_parametername.model');

exports.get_test_parameter_name_radiology = (req,res)=>{
//    let updatedquery = 'select radiology_parameter.parameter_name from radiology_parameter ;'
let updatedquery = 'select * from radiology_parameter;'

    let updatedvalues = [];
   
    if(req.query.id){
        updatedquery = 'select * from radiology_parameter where id = ?'
        updatedvalues.push(req.query.id);
    }
   

    test_parameter_name_radiology.setvalues(updatedquery,updatedvalues);
    test_parameter_name_radiology.get_test_parameter_name_radiology((err,name)=>{
        if(err)
        res.send(err);

        console.log('test parameter name is needed',name);
        res.send(name);
    })
}

