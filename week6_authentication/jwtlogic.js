
// replacing the token logic with jwt 
const express = require("express");
const  jwt_secret = "rnadomstringforjwtsecrettoken" ;

const jwt = require("jsonwebtoken");

const app = express();


app.use(express.json());

const users = [];

// function to genreate token of 10 characters


app.post("/Signup", function (req, res) {
  // we will  be requiring  two thing only // as a inmmemory varibale

  const username = req.body.username;
  const password = req.body.password;
  // making  some simple checkpoints
  if (!username || !password) {
    return res.status(400).json({ msg: "username and password required" });
  }

  // check if user already exists
  if (users.find((u) => u.username === username)) {
    return res.status(409).json({
      msg: "you are already signed in",
    });
  }
  // storing these  thing in that  global array
  users.push({
    username: username,
    password: password,
  });
  // aftr storing we will send a response
  res.json({
    msg: "you are signedin successfully",
  });

  console.log(users);
});


app.post("/Signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  
  let founduser = null;

  for (let i = 0; i < users.length; i++) {
    if (users[i].username == username && users[i].password == password) {
      founduser = users[i]; // muje user milgya
      break;
    }
  }   


//// IMPORTANR CHNAGE HAPPENED HERE
  if (founduser) {  
    // conveting the username into a a json webtoken 
    const token = jwt.sign({ username: username }, jwt_secret);
// token generated above by this function 

    return res.json({
      message: token,
    });
  }

  res.status(401).json({ msg: "invalid credentials" });
});
app.get("/me" , function (req, res) {

  const token = req.headers.token; // decode the token jwt
  const decodeInfo = jwt.verify(token, jwt_secret);
  const username =  decodeInfo.username ;
  const foundUser = null ;

 for (let i = 0; i < users.length; i++) {
  if(users[i].username === username){
    foundUser = users[i];
 }
}


 if(foundUser){
  res.json({
    username: foundUser.username,
    password : foundUser.password 

  })
 }
 else {
  res.json({
    message : " token invalid"
  })
 }

})


const PORT = 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));


