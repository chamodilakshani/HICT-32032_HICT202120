const express = require("express");
const users = require("./data");

const app = express();

app.use(express.json());

// GET request
app.get("/api/users", (req, res) => {
    res.json(users);
});

// POST request
app.post("/api/users", (req, res) => {
    const newUser = req.body;

    users.push(newUser);

    res.json({
        message: "User added successfully",
        user: newUser
    });
});

// Start server
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});