const DepartmentModel = require('../models/department.model')

exports.createDepartment = (req,res)=>{
    const DepartmentData = new DepartmentModel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'please fill all fields'});
    }else{
        DepartmentModel.createDepartment(DepartmentData,(err,department)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:' department added successfully',data:department.insertId});

        })
    }

}

exports.getDepartment = (req,res)=>{
    DepartmentModel.getDepartment((err,department)=>{
        if(err)
        res.send(err);
     
        console.log('department ',department);
        res.send(department);
    })
}