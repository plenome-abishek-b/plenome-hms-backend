const Live_consultation_model = require('../models/ipd_live_consultation.model');
exports.get_live_consultation = (req,res)=>{
    Live_consultation_model.get_live_consultation((err,live_consultation)=>{
        if(err)
        res.send(err);

        console.log('live consultation',live_consultation);
        res.send(live_consultation);
    })
}

exports.get_live_consultation_by_title = (req,res)=>{
    console.log('get live consultation by title');
    Live_consultation_model.get_live_consultation_by_title(req.params.consultation_title,(err,live_consultation)=>{
               
        if(err)
            res.send(err);
           
            console.log('live consultation by title',live_consultation);
            res.send(live_consultation);
    })
}