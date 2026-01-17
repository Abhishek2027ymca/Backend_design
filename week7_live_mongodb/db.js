
const mongoose = require("mongoose");
 const ObjectId = mongoose.ObjectId;

// importing a class calld  schema  
const Schema = mongoose.Schema;

const User = new Schema({
     email : String,
     password : String,
     name : String

})// defint the schema 
// putting the dta int he table 


const Todo = new Schema({
    title : String ,
    done : Boolean ,
    userId : ObjectId 
  


})
//________________________________this'users' will eb same a sin mongodb , so be specific 
const UserModel = mongoose.model('users' , User)
const Todomodel = mongoose.model('todos' , Todo)

module.exports = {
    UserModel : UserModel ,
    Todomodel : Todomodel
}