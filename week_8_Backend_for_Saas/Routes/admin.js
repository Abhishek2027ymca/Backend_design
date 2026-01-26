const {Router}  = require("express")
const adminRouter = Router();

adminRouter.use("/signup", async function (req, res) {
    // const email = req.body.email;
    // const name = req.body.name;

    res.json({
        message: "signup endpoint"
    })

})

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
    adminRouter : adminRouter
}