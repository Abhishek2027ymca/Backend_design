// this is a user route 
// make a function and export it 


// const express = require("expres");
// const Router = express.Router ; // important 
//________ or________
const { Router } = require("express")
const useRouter = Router(); // router is a function 


// now istead  of this .... app.post("/user/signup" , async function(req, res)
// use  .. ___________________useRouter.post
useRouter.use("/signup", async function (req, res) {
    // const email = req.body.email;
    // const name = req.body.name;

    res.json({
        message: "signup endpoint"
    })

})

useRouter.post("/signin", async function (req, res) {
    res.json({
        message: "signup endpoint"
    })
})

useRouter.get("/purchases", async function (req, res) {
    res.json({
        message: " these are your purchase "
    })
})




module.exports = {
    useRouter: useRouter
}