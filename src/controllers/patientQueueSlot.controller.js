const PatientQueueSlotModel = require('../models/patientQueueSlot.model');
exports.getSlot = (req,res)=>{

    let updatedQuery = 'select doctor_shift.start_time,doctor_shift.end_time,staff.name,staff.id,global_shift.name as globalShiftName ,doctor_shift.id as slotId from doctor_shift join staff on staff.id = doctor_shift.staff_id join global_shift on global_shift.id = doctor_shift.global_shift_id'
    let updatedValues = [];
    if(req.query.staffId && req.query.shift){
        updatedQuery += ' where staff.id = ? and global_shift.id = ?'
        updatedValues.push(req.query.staffId);
        updatedValues.push(req.query.shift);
    }

    PatientQueueSlotModel.setQuery(updatedQuery,updatedValues)
    PatientQueueSlotModel.getSlot((err,slot)=>{
        if(err)
        res.send(err);

        console.log(' slot',slot);
        res.send(slot);
    })

}