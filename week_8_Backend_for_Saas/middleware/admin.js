
//! CREATIGN THE ADMIN MIDDLEWARE SPERATELY FOR ADMIN 

const express = require("express");
const app = express();
const jwt = require ("jsonwebtoken");
const mongoose =  require("mongoose");
const { secret_keyy_admin } = require("../config");


// the secret key is cused  hrr eto verify the middlewat=re 
// 
function adminAuth(req, res, next) {
    const token = req.headers.token;// expecting a token in token header 
         
    const decodedData = jwt.verify(token, secret_keyy_admin); // token  has id and i can extarct it using verify method
    if (decodedData) {
        req.userId = decodedData.id;// not userId its id , found ed by checkig the jwt value 
        next(); // move to the next middleware or request handler
        // always use this when we are syccesfully done with the middleware
    }
    else {
        res.status(403).json({
            msg: "incorrect data"
        })
    }

}

// export this auth function 
module.exports = {
    adminAuth : adminAuth
}