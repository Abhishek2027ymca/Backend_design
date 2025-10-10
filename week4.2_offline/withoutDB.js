const express = require("express");
const app = express();

// we will use inmemory variable to store data
// creatinf an inmemory arrya 

var users = {
    name: "harkirat",
    kidneys: [{
        healthy: false
    }]
}
app.use(express.json());

// creating an array to store the kidneys data

app.get("/", function (req, res) {
    const johnkidney = users.kidneys;
    // mene store krli jon ki kidnety
    console.log(johnkidney);
    const numberodkid = johnkidney.length;

    let nohealthykidney = 0;

    for (let i = 0; i < numberodkid; i++) {
        if (johnkidney[i].healthy === false) {
            nohealthykidney += 1;
        }
    }

    const unhealthy_kidney = numberodkid - nohealthykidney;
    // after requesting at 3000 port we will send the response to the user
    res.json(
        {
            johnkidney,
            numberodkid,
            nohealthykidney,
            unhealthy_kidney
        }
    )

})


/// psosting a request to the server
// we can see postt req. from th brpwser  is via postman  

app.post("/", function (req, res) {
    const ishealthy = req.body.ishealthy;
    // this array is updated each time we post a request to the server
    // and if i send a get req. i will get the updated array
    users.kidneys.push({
        healthy: ishealthy
    });
    res.json({
        message: "New kidney added!"
    });
})


// we will run the server at port 3000





// now we will use put req. to update the data of the kidney
app.put("/", function (req, res) {
    for (let i = 0; i < users.kidneys.length; i++) {
        users.kidneys[i].healthy = true;
    }
    // after updating the data we will send the response to the user
    res.json({
        message: "All kidneys are healthy now!"
    });
});

// clearly all data will be lost when the server is restarted because we are not using any database to store the data
// we are using only in memory variable to store the data


app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});


// last end points is delete 

// anytime some one do a dlete req. all the unhealth kidne  will be deleted from the server
app.delete("/", function (req, res) {
    if (!users.kidneys || users.kidneys.length === 0) {
        return res.status(404).json({
            message: "No kidneys found to delete"
        });
    }

    const initialLength = users.kidneys.length;
    // Filter out unhealthy kidneys
    users.kidneys = users.kidneys.filter(kidney => kidney.healthy === true);
    
    const deletedCount = initialLength - users.kidneys.length;
    
    res.json({
        message: `${deletedCount} unhealthy kidneys were deleted!`,
        remainingKidneys: users.kidneys.length
    });

})