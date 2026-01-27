

const mongoose = require("mongoose");

const ObjectId = mongoose.ObjectId;

const Schema = mongoose.Schema;
mongoose.connect('mongodb+srv://admin:rr8prOazvrC6Tzi1@cluster0.byjr6ke.mongodb.net/courseEra_app')
const UserSchema  = new Schema({
    email: { type : String, unique : true  },
    password: String,
    name: String,
    firstname: String,
    lastname: String


})

// schema is aclas , create its diffrent itstance s 
const AdminSchema = new Schema({

     email: { type : String, unique : true  },
    password: String,
    name: String,
    firstname: String,
    lastname: String

})

const CourseSchema  = new Schema({
    title: String,
    description: Boolean,
    price: Number ,
    imgURL: String,
    Createrid: ObjectId  // type is object id which we have to import 
 
})

const purchaseSchema  = new Schema({
    userId :  ObjectId , // this user id comes  from user model 
    courseId : ObjectId // this comes from course model
    // how mongodb identify 
    // relation between two models
    // by using object id and referncing
})



//________________________________this'users' will eb same a sin mongodb , so be specific 
const UserModel = mongoose.model('User', UserSchema)// User is the name int  the  schema 
const AdminModel = mongoose.model('admin', AdminSchema)
const CourseModel = mongoose.model('Course', CourseSchema)
const PurchaseModel = mongoose.model('purchase', purchaseSchema)

//...............................'from mongodb ,  from th e current chgena i created  here 
module.exports = {
    UserModel: UserModel,// which one is that whcih i created above as a model 
    
    AdminModel: AdminModel,
    CourseModel : CourseModel,
    PurchaseModel : PurchaseModel,

}
