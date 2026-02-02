const { Router } = require("express") // it is afunction that helps us to create multiple routers
const adminRouter = Router(); // create an instance of router 
const bcrypt = require("bcrypt");

// import the zod library 
const { z, parse } = require("zod");
const { AdminModel } = require("../db");
const { secret_keyy_admin } = require("../config");
 const {adminmdlwr} = require("../middleware/admin");
// secret key for  admina nd user  shopuld eb dfrent 
const secret_keyy = secret_keyy_admin;
adminRouter.use("/signup", async function (req, res) {
    // is ther e any errp on signini endpoints



    const requiredSchema = z.object({  // requiredschema is an object which contains all the fields that we want to validate
        email: z.string().max(100),
        password: z.string().max(100),
        firstname: z.string().min(2).max(100),
        lastname: z.string().min(2).max(100)
    }) // now validate them

    const parseData = requiredSchema.safeParse(req.body); // why we put in req.body because we are sending data in body of the request

    if (!parseData.success) {
        res.json({
            message: "incorrect format of your ",
            error: parseData.error.errors
        });


        return; // menas in codeflow , aage badh jaao 
    }

    // extracting the actual data 
    //   so firstky it gets validated and then  we put it into  request body ?
    // yes exactly
    const email = req.body.email; // it menas we are extrating the email , form requ, ki body 
    const password = req.body.password;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;


    try { // we bapplied try catch block because we are doing database operations which may fail   
        const existingUser = await AdminModel.findOne({ email });
        if (existingUser) {
            res.json({
                message: "user already exist"
            })
            return
        }

        // hashing the password before storing it into the database 

        const hashedpassword = await bcrypt.hash(password, 5);

        await AdminModel.create({
            email: email,
            password: hashedpassword,
            firstname: firstname,
            lastname: lastname
        })
        res.json({
            message: "user created successfully"
        })

    } catch (err) {
        res.status(500).json({ // why we use sstatus 505 // 
            message: "server error"
        })
        console.log(err);
    }
});




adminRouter.post("/signin", adminmdlwr,  async function (req, res) {


    const { email, password } = req.body;


    const admin = await AdminModel.findOne({
        email: email,
        password: password
    })

    if (admin) {
        const token = jwt.sign({
            id: admin._id
        }, secret_keyy_admin)


        res.json({
            token: token
        })
    }
    else {
        res.status(403).json({
            message: "incorrect credential"
        })
    }




})
// THIS ENDPOIINT IS AUTHENTICATION BASWED 

adminRouter.get("/course", async function (req, res) {
    res.json({
        message: " these are your purchase "
    })
})


module.exports = {
    adminRouter: adminRouter
}