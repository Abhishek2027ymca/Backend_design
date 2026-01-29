const express = require("express");
const app = express();
const jwt = require ("jsonwebtoken");
const mongoose =  require("mongoose");

const JWT_SECRET = "ADE!@EX$&%FGHI(7)*HIKL";

function auth(req, res, next) {
    const token = req.headers.token;// expecting a token in token header 

    const decodedData = jwt.verify(token, JWT_SECRET); // token  has id and i can extarct it using verify method
    if (decodedData) {
        req.userId = decodedData.id;// not userId its id , found ed by checkig the jwt value 
        next(); // move to the next middleware or request handler
        // always use this when we are syccesfully done with the middleware
    }
    else {
        res.status(403).json({
            msg: " incorrect data"
        })
    }

}

// export this auth function 
module.exports = {
    auth : auth
}