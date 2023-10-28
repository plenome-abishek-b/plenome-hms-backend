const slot_postmodel = require('../models/appointment_shift.model');

exports.getslot_post = (req,res)=>{
    let updatedquery = 'select * from doctor_shift'
    let updatedvalues = [];

    if(req.query.staff && req.query.shift && req.query.day){
        updatedquery = 'select * from doctor_shift where staff_id = ? and global_shift_id = ? and day = ?'
        updatedvalues.push(req.query.staff)
        updatedvalues.push(req.query.shift)
        updatedvalues.push(req.query.day)



    }
    slot_postmodel.setquery(updatedquery,updatedvalues)
    slot_postmodel.getslot_post((err,slot)=>{
        if(err)
        res.send(err);

        console.log('slot doctor shift fetched',slot);
        res.send(slot);
    })
}

exports.createslot_post =(req,res)=>{
    const postdata = new slot_postmodel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0){
        res.send({success:false,message:'fill the details'});
    }else{
        slot_postmodel.createslot_post(postdata,(err,post)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:'shift details added successfully',data:slot_postmodel.insertId});
            
        })
    }
}

exports.updatedslot_post = (req,res)=>{
    let updatedquery = '';
    let updatedvalues = []

    if(req.query.id){
        updatedquery = 'update doctor_shift SET ? where id = ?'
        updatedvalues.push(req.query.id)
    }
    slot_postmodel.setquery(updatedquery,updatedvalues)
        const slot_postupdatedata = new slot_postmodel(req.body);
        if(req.body.constructor === Object && Object.keys(req.body).length ===0){
            res.send({success:false,message:'fill the details'});
        }else{
            slot_postmodel.updateslot_post(slot_postupdatedata,(err,slot)=>{
                if(err){
                    res.send(err);
                }else{
                    if(slot_postupdatedata.id == updatedvalues[0]){
                        res.json({status:true,message:'doctor shift updated successfully',data:slot_postupdatedata.id});    
                    }else{
                        res.json({status:false,message:'post value and id should be same'})
                    }
                }
            })
        }
}