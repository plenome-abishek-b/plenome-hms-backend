var category_name = require('../models/category_name.model');

exports.get_category_name = (req,res)=>{
    let updatedquery = 'select * from pathology_category'
    let updatedvalues = [];

    if(req.query.search){
        updatedquery = 'select * from pathology_category'
        updatedvalues.push(req.query.search);
    }

    category_name.setvalues(updatedquery,updatedvalues);
    category_name.get_category_name((err,name)=>{
        if(err)
        res.send(err);

        console.log('category name is fetched',name);
        res.send(name);
    })
}