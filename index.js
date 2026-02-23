const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

// Simple GET route
app.get("/", (req, res) => {
    res.send("Server is running successfully");
});

// POST route
app.post("/data", (req, res) => {
    const userData = req.body;
    res.json({
        message: "Data received successfully",
        data: userData
    });
});

// Route using axios (example API call)
app.get("/users", async (req, res) => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: "Error fetching users" });
    }
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});