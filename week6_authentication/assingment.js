//🧠 Assignment: JWT Auth + Protected Routes (Mini Project)

const express = require("express")
const jwt_secrett = "arandomsecretkey123";

const jwt = require("jsonwebtoken");

const app = express()

app.use(express.json());


const users = [];
// an empty aray ehre user can store the n username an  password 


app.post("/signup" , function(req, res){
    const username = req.body.username ;
    const password = req.body.password ;

// you havnt provided the username and passsword 
    if(!username || !password){
        return res.status(400).json({
            msg  : " you havnt provided the  required data "
        })
    }


    
    // chainf the user already exist or not 


    if (users.find((u) => u.username === username)) {
    return res.status(409).json({
      msg: "you are already signed in",
    });
  }
// now string the data in in users array 
users.push({
    username : username ,
    password: password
})

res.json({
    msg : "you signed in successfully",
})

// always make clog uswer 
 console.log(users);
 

})


app.post("/signin" , function(req, res){

     const username = req.body.username ;
    const password = req.body.password ;

 let founduser = null ;

 // checking if the user password exist or not 
 for(let i = 0 ; i<users.length ; i++){

// iteratibng through each member of  useers varibale and acheck it it eaqual to my current valur of usernamw  and pssword 
  if (users[i].username == username && users[i].password == password) {
      founduser = users[i];
      break;
    }

    else{
        res.status(401).json(
            {
                msg :" invalid credentials" ,
            }
        )
    }
 }
// storingthe value of current user and password  in app found user 

if (founduser)
{// convertiing the username into jwt 

    const token = jwt.sign({username:username} , jwt_secrett , { expiresIn: '2m' });
    
    res.json({
        token : token
    })

}




})

// creating the prtected routes

app.get("/profile" , function(req, res){
    //  returning the user info fromthe jwt  
// taking the toekn 
    let token = req.headers.token ;
    const decodeinfo_from_the_token = jwt.verify(token , jwt_secrett);
      let foundUser = null ;
  const   getusername  = decodeinfo_from_the_token.username;
  // it cannoot return password 
for (let i = 0; i < users.length; i++) {
  if(users[i].username === getusername){
    foundUser = users[i];
 }
}
//// check here 
 if(foundUser){
  res.json({
    username: foundUser.username,
    password : foundUser.password 

  })
 }
 else {
  res.json({
    message : "token invalid"
  })
 }

})


app.get("/dashboard" ,  function(req, res){
// take user credential like token
// from it convert  jwt into username 
// gives a msg of   returns message "Welcome <username> to your dashboard!"

   let token = req.headers.token ;
    const decodeinfo_from_the_token = jwt.verify(token , jwt_secrett);
      let foundUser = null ;

  const   getusername  = decodeinfo_from_the_token.username;


  res.json({
    msg :"Welcome " <getusername> " to your dashboard!"
  })


})





const PORT = 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));


