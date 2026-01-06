

const express = require("express")

const app = express();

// making a mw 
// it require a next method as param 
// which will take contorl  from mw1 to mw2

function isoldmw(req, res, next) {
   // take age input as query param
   const age = req.query.age;
   if (age >= 15) {
      // goin to the next mw 
      // to perform so other funtion 
      next();
   }
   else {
      // stop the work till here only 
      res.json({
         msg: "sorry you are not of thta age "
      })
   }
}


app.get("/ride1",isoldmw,  function (req, res) {
   
   if (isold(req.query.age)) {
      res.json({
         msg:"you are good to go" 
      })
   }
})



app.get("/ride2", isoldmw ,  function (req, res) {
   // sending age as a query param
   // in the isold fnc 
   if (isold(req.query.age)) {
      res.json({
         msg: " you are goood to go for r2"
      })
   }
   

})

app.listen(3000)

  

app.get("/" , (req, res) => {
   // taking input from the user
   //  
    res.send("Hello World from express js ")
})






app.listen(3000);// ap is lintening 
