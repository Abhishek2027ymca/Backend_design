const { Router } = require("express")
const adminRouter = Router();
const bcrypt = require("bcrypt");

// import the zod library 
const { z, parse } = require("zod");
const { UserModel } = require("../db");



adminRouter.use("/signup", async function (req, res) {

    const requiredSchema = z.object({
        email: z.string().max(100),
        password: z.string().max(100),
        firstname: z.string().min(2).max(100),
        lastname: z.string().min(2).max(100)
    }) // now validate them

    const parseData = requiredSchema.safeParse(req.body);

    if(!parseData.success){
        res.json({
            message : "incorrect format",
            error : parseData.error.errors
        });

        return; // menas in codeflow , aage badh jaao 
    }

    // extracting the actual data 

    const email = req.body.email;
    const password = req.body.password;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;


try{
    const existingUser = await UserModel.findOne({ email });
    if(existingUser){
        res.json({
            message : "user already exist"
        })
        return ;
        // hashing the password before storing it into the database 
        
        const hashedpassword= await bcrypt.hash(password, 5);

        await UserModel.create({
            email: email,
            password: hashedpassword,
            name: name,
            firstname: firstname,
            lastname: lastname
        })
        res.json({
            message: "user created successfully"
        })

    }}catch(err){
        res.status(500).json({
            message : "server error"
        })
        console.log(err);
    }
});




adminRouter.post("/signin", async function (req, res) {
    res.json({
        message: "signup endpoint"
    })
})

adminRouter.get("/course", async function (req, res) {
    res.json({
        message: " these are your purchase "
    })
})


module.exports = {
    adminRouter: adminRouter
}