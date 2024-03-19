// server.js

const express = require('express');
const cors = require('cors');
const dbconnection = require('./config/connection');

dbconnection();

const app = express();
const PORT = process.env.PORT || 5000;
const treeRoutes = require("./routes/treeRoutes")


// Middleware for parsing JSON bodies
app.use(express.json());
app.use(cors({
    origin: "https://backend-3-b1tz.onrender.com/"
}))
// Define routes for CRUD operations
app.use("/api", treeRoutes)



// Start the server
app.listen(PORT, (err) => {
    if (err) {
        throw Error(`error: ${err}`)
    } else {
        console.log(`Server is running on http://localhost:${PORT}`);
    }
});
