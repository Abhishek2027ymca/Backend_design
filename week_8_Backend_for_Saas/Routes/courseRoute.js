
const { Router } = require("express") 
const courseRouter = Router(); // router is a function 

courseRouter.post("/purchases" , async function(req, res){
    res.json({
        message : " these are your purchase "
    })
}) 
courseRouter.get("/preview" , async function(req, res){
    res.json({
        message : " these are your courses  "
    })

}) 



module.exports = {
    courseRouter  : courseRouter
}