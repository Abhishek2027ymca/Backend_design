require('dotenv').config()
console.log(process.env.MONGO_URL)


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

 async function main() {
    await mongoose.connect(process.env.MONGO_URL)
    app.listen(3000);
    console.log("listening on port 3000")
}
      
main() // calliingthe main fnc



// cratign the aut routes 



 
