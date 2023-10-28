const nurse_note_model = require('../models/nurse_note.model');

exports.createNurse_note = (req,res)=>{
    const nurse_noteData = new nurse_note_model(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'please fill all fields'});
    }else{
        nurse_note_model.createNurse_note(nurse_noteData,(err,nurse_note)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:' nurse_note added successfully',data:nurse_note.insertId});

        })
    }
}

exports.getNurse_note = (req,res)=>{
    nurse_note_model.getNurse_note((err,nurse_note)=>{
        if(err)
        res.send(err);
     
        console.log('nurse_note ',nurse_note);
        res.send(nurse_note);
    })
}