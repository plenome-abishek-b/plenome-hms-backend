var category_name_radiology = require('../models/radiocategory_name.model');

exports.get_category_name_radiology = (req,res)=>{
    let updatedquery = 'select * from lab'
    let updatedvalues = [];

    if(req.query.category_name){
        updatedquery = 'select * from lab '
        updatedvalues.push(req.query.category_name);
    }

    category_name_radiology.setvalues(updatedquery,updatedvalues);
    category_name_radiology.get_category_name_radiology((err,name)=>{
        if(err)
        res.send(err);

        console.log('category name radiology is fetched',name);
        res.send(name);
    })
}