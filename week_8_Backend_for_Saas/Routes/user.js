// this is a user route 
// make a function and export it 


// const express = require("expres");
// const Router = express.Router ; // important 
//________ or________
const { Router } = require("express")
const {UserModel} = require("../db") // any errorher
const useRouter = Router(); // router is a function 


// now istead  of this .... app.post("/user/signup" , async function(req, res)
// use  .. ___________________useRouter.post
useRouter.use("/signup", async function (req, res) {
    // const email = req.body.email;
    // const name = req.body.name;

const {email, password , firstname , lastname } = req.body;


await UserModel.create({
    email : email,
    password : password,
    firstname : firstname,
    lastname : lastname 
})

 res.json({
        message: "signup succed"
    })

})



useRouter.post("/signin", async function (req, res) {
    const {email , password } = req.body;

    
    res.json({
        message: "signin endpoint"
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