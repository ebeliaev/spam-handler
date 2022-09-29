const express = require('express');
const router = express.Router();
const fs = require ('fs');


router.use(express.json());

/** GET ROUTE /reports */
router.get("/reports", (req,res)=>{
    try{
        const jsonString = fs.readFileSync("./data/reports.json","utf-8");
        res.header("Access-Control-Allow-Origin", "*");
        res.send(JSON.parse(jsonString));
    }catch(err){
        console.log("Error parsing Json" + err);
        res.sendStatus(400);
    }
});

/** GET ROUTE /reports */
router.get("/newReport", (req,res)=>{
    try{
        const jsonString = fs.readFileSync("./data/newReport.json","utf-8");
        res.header("Access-Control-Allow-Origin", "*");
        fs.writeFileSync("./data/reports.json",jsonString);
        return res.send(JSON.parse(jsonString));
    }catch(err){
        console.log("Error parsing Json" + err);
        return res.sendStatus(400);
    }
});

/** PUT ROUTE /reports/:reportId */
router.put("/reports/:reportId", (req,res)=>{

    try{
        const parsedJSON = JSON.parse(fs.readFileSync("./data/reports.json","utf-8"));
                
        /** LOOP THROUGH FILE */
        for (var i = 0; i < parsedJSON.elements.length; i++) {

            //value1.push(parsedJSON.elements[i].id);

            if (parsedJSON.elements[i].id === req.params.reportId) {
                switch(req.body.state){

                    /** CASE BLOCK */
                    case "BLOCK": parsedJSON.elements[i].state = "BLOCK";
                    fs.writeFileSync("./data/reports.json",JSON.stringify(parsedJSON));
                    return res.status(200).send(parsedJSON); 
                    
                    
                    /** CASE RESOLVE */
                    case "RESOLVE": parsedJSON.elements.splice(i, 1);
                    fs.writeFileSync("./data/reports.json",JSON.stringify(parsedJSON));
                    return res.status(200).send(parsedJSON);
    
                }
              break;
            }

            
        }

        /** SEND BACK PARSED JSON */
        return res.send(parsedJSON);
        
    }catch(err){
        console.log("Error writing Json" + err);
        res.sendStatus(400);
    }

});

module.exports = router

