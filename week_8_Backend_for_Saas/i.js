
const express = require("express");
const app = express();
const jwt = require ("jsonwebtoken");
const mongoose =  require("mongoose");
const { useRouter} = require("./Routes/user");
const {courseRouter} = require("./Routes/courseRoute");
const {adminRouter} = require("./Routes/admin");
const {UserModel , AdminModel , CourseModel , PurchaseModel} = require ("./db");
// adding router  



// userRoute(app);
// courseRoute(app)

app.use("/user" , useRouter)// any request which comes to /user will go over userrouter aswell 
app.use("/course" , courseRouter)// all request coming to course will move to course router as well 
// calling a route fnc 
app.use("/admin" , adminRouter)


app.listen(3000);



 
