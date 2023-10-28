const GraphModel = require('../models/graph.model')



exports.getGraph= (req,res)=>{

    let updatedQuery = 'call plenome_HMS.dashboardGraph(?,?)'
     let updatedValue = []
     if(req.query.year&&req.query.month){
         updatedValue.push(req.query.year,req.query.month)              
     }

     GraphModel.setQuery(updatedQuery,updatedValue)
     GraphModel.getGraph ((err,count)=>{
             if(err)
             res.send(err);
          
             console.log('GraphModel ',count);
             res.send(count);
         })
    }