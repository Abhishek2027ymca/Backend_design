// HTTP is a protocol
// We use Express to make an HTTP server
// Exposing a functionality on the internet// Start the server on port 3000
// app.listen(3000, () => {
//     console.log("Server is running on http://localhost:3000");
// });

const express = require("express");

// Function to calculate sum from 0 to n-1
function sum(n) {
    let ans = 0;
    for (let i = 0; i < n; i++) {
        ans = ans + i;
    }
    return ans;
}

// Create an instance of the Express app
const app = express();

// Define a route with query parameter
app.get("/", function (req, res) {
    // Extract query parameter 'n'
    // requesting a query from the useer 
    
    const n = req.query.n;
    const ans = sum(n);

    // Send the result back to the client
    res.send("Hi, the answer is " + ans);
});

// 

app.listen(3000)