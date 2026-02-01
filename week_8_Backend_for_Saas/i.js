
const express = require("express");
const app = express();
const jwt = require ("jsonwebtoken");
const mongoose =  require("mongoose");
const { useRouter} = require("./Routes/user");
const {courseRouter} = require("./Routes/courseRoute");
const {adminRouter} = require("./Routes/admin");
const {UserModel , AdminModel , CourseModel , PurchaseModel} = require("./db");
// adding router  
app.use(express.json()); // middleware to convert json to js object
// userRoute(app);
// courseRoute(app)git 

app.use("/user" , useRouter)// any request which comes to /user will go over userrouter aswell 
app.use("/course" , courseRouter)// all request coming to course will move to course router as well 
// calling a route fnc 
app.use("/admin" , adminRouter)

 async function main(){// if therse is aan erro in this link app will crash 
     await mongoose.connect("mongodb+srv://admin:rr8prOazvrC6Tzi1@cluster0.byjr6ke.mongodb.net/courseeEra_app")
     app.listen(3000);
     console.log("listening to the port");
     }
      
main() // calliingthe main fnc



// cratign the aut routes 



 
