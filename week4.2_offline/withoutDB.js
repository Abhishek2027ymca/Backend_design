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
app.get("/", function (req, res) {
    const johnkidney = users[0].kidneys;
    // mene store krli jon ki kidnety
    console.log(johnkidney);
    const numberodkid = kidneys.length;

    let nohealthykidney = 0;

    for (let i = 0; i < numberodkid; i++) {
        if (kidneys[i].healthy === false) {
            nohealthykidney += 1;
        }
    }

    const unhealthy_kidney = numberodkid - nohealthykidney;
    res.json(
        {
             
        }
    )

})

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});