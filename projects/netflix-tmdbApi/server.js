const express = require('express');
const path = require("path");
const app = express();

let initial_path = path.join(__dirname, "public");
app.use(express.static(initial_path));

app.get("/", (req, res) => {
    res.sendFile(path.join(initial_path, "index.html"));
});

app.get("/:id", (req, res) => {
    res.sendFile(path.join(initial_path, "about.html"));

});


app.use((req, res) => {
    res.json("404 not found...");
});



// Serve static files from the "public" directory
// app.use(express.static('public'));


// Add an app.get route for the root URL ("/")
// app.get("/", (req, res) => {
//     // Use path.join to create the correct file path
//     const initial_path = __dirname; // Assuming you want to serve from the root of your project
//     res.sendFile(path.join(initial_path, "public", "index.html"));
//   });




const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}...`);
});