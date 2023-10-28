const inventoryIssueItemmodel = require('../models/issue_item.model');
exports.getissue_item = (req,res)=>{

    let updatedQuery = 'select item.name as item_name,item_category.item_category, item_issue.issue_date,item_issue.return_date,item_issue.issue_by,item_issue.quantity, staff.name,staff.surname, roles.name,item_issue.is_returned from item_issue join item on item.id = item_issue.item_id join staff on staff.id = item_issue.issue_to join item_category on item_category.id = item.item_category_id join staff_roles on staff_roles.staff_id = staff.id join roles on roles.id = staff_roles.role_id'
    let updatedvalue = [];

    // if(req.query.id){
    //     updatedQuery = 'select * from item_issue'
    //     updatedvalue.push('req.query.id');
    // }

    inventoryIssueItemmodel.setQuery(updatedQuery,updatedvalue);
    inventoryIssueItemmodel.getissue_item((err,items)=>{
        console.log(updatedQuery);
        if(err)
        res.send(err);

        console.log('items issued',items);
        res.send(items);
    })
}

exports.createissue_item = (req,res)=>{
    const itemdata = new inventoryIssueItemmodel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'please fill all fields'});
}else{
    inventoryIssueItemmodel.createissue_item(itemdata,(err,item)=>{
        if(err)
        res.send(err);
        res.json({status:true,message:'issue item added successfully',data:item.insertId});
    })
}
}