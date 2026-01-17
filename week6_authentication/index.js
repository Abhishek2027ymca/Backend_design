const express = require("express");
// adding an express framework

/// creatinf a post  rout
const app = express();
// this is a moddle ware thta will  help us to parse json data
// into js object

app.use(express.json());
// ceeatig n a global varibale

const users = [];// ana aarray

// function to genreate token of 10 characters
function generate_token() {
  // via math.random
  let token = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < 20; i++) {
    token += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return token;
}
// creatign a random functipon to generaet token// random string



 
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
  // shjowing the user array in the console
  console.log(users);
});

// after  signingin
// we habve to give  user a unique token

// whenever  user hit this end point

app.post("/Signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) {
    return res.status(400).json({ msg: "username and password required" });
  }

  let founduser = null;

  for (let i = 0; i < users.length; i++) {
    if (users[i].username === username && users[i].password === password) {
      founduser = users[i];
      break;
    }
  }

  if (founduser) {
    const token = generate_token();

    // put that token into the founduser object
    founduser.token = token; // that global araty will store tokn value also 
    // 
    // respond with the token
    return res.json({
      message: token,
    });
  }

  // if not found, send an error
  res.status(401).json({ msg: "invalid credentials" });
});
// only authenticated user can access this route
app.get("/me" , function (req, res) {
// getting the token fomt he  header 
// user will send us the tken  formt  the header 
// which contains the metadata 
// storing the token in a varibale
  const token = req.headers.token;
  const foundUser = null ;
  //// the token i got  formt he user , i will check  it form users arrya where all the token are present 

 for (let i = 0; i < users.length; i++) {
  if(users[i].token === token){
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
    message : "token invalid"
  })
 }

})


const PORT = 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

