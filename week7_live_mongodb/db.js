
const mongoose = require("mongoose");

 const ObjectId = mongoose.ObjectId;

// importing a class calld  schema  
const Schema = mongoose.Schema;

const User = new Schema({
     email : String,
     password : String,
     name : String

//MongoDB is schema-less, but mongoose enforces structure
})
// defint the schema 
// putting the dta int he table 


const Todo = new Schema({
    title : String ,
    done : Boolean ,
    userId : ObjectId  // type is object id which we have to import 
  

})
//________________________________this'users' will eb same a sin mongodb , so be specific 
const UserModel = mongoose.model('users' , User)// User is the name int  the  schema 
const Todomodel = mongoose.model('Todos' , Todo)
//...............................'from mongodb ,  from th e current chgena i created  here 
module.exports = {
    UserModel : UserModel ,// which one is that whcih i created above as a model 
    //User : UserModel , it thisalso corrct 
    //
    Todomodel : Todomodel
}
// exporting these  iles from here 
// exporting is very omoprtant to use it in other files
// i can export any thing from here  like functions , variables  or classes
// but rn i have exported 2 models