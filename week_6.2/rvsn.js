
const express = require("express")

const jwt = require(
"jsonwebtoken"
);

const jwt_secret = "reandom1secret098"

const app = express();

app.use(express.json())

const users = [];


app.post("/signup" , function(req, res){
    const  username = req.body.username 
    const password = req.body.password 

users.push({
    username : username ,
     password : password
})
// checkpoint for  same  username 

res.json({
    msg : "you are signed in succesfullu"

})

})


app.post("/signin" , function(req, res){
 
  const  username = req.body.username 
    const password = req.body.password 

let founduser = null ;

for (let i= 0; i < users.length; i++) {

    if(users[i].username=== username &&  users[i].password === password ){
    // here , if t he usename  and password does already  exsit inmy  users rray , then it 
    // then i will generate the token for the current users  
        founduser = users[i]  
    }

    if(!founduser){
        res.json({
            msg :" credential incorrect "
        })
    }
    else{
        // generatw  the token 
        const token = jwt.sign({username } ,jwt_secret);

        res.json({
            token : token 
        })
    }


    
    
}


})

// !! to acces this put the genreated token int  hedaer  
app.get("/me" , function(req, res){
    const token = req.headers.token;
     
    // now i will make a ecurity check  , , so that i can  only use the token  genrat in case if the toekn gets leajked 
    // we use the jwt secret key 
// verifying the data slong with the secret key 

    const decode_info = jwt.verify(token, jwt_secret)

    if( decode_info.username){
   
        let founduser = null ;

  for (let i = 0; i < users.length; i++) {
    if (users[i].username === decodeData.username) {

      founduser = users[i];
      break;
    }
  }
      
  res.json({
    username: foundUser.username,
    password : foundUser.password 
  })

    }





})


app.listen(3000);
