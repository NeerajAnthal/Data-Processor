const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// POST /bfhl - Process Input JSON
app.post("/bfhl", (req, res) => {
    try {
        const { data } = req.body;
        
        if (!Array.isArray(data)) {
            return res.status(400).json({ is_success: false, message: "Invalid input format" });
        }

        // Extract numbers and alphabets
        const numbers = data.filter(item => /^[0-9]+$/.test(item));
        const alphabets = data.filter(item => /^[a-zA-Z]$/.test(item));

        // Find the highest alphabet (case-insensitive)
        const highestAlphabet = alphabets.length ? [alphabets.sort((a, b) => b.localeCompare(a, 'en', { sensitivity: 'base' }))[0]] : [];

        // Response
        res.json({
            is_success: true,
            user_id: "john_doe_17091999",  // Replace with your actual user_id
            email: "john@xyz.com",
            roll_number: "ABCD123",
            numbers,
            alphabets,
            highest_alphabet: highestAlphabet
        });

    } catch (error) {
        res.status(500).json({ is_success: false, message: "Internal Server Error" });
    }
});

// GET /bfhl - Return operation_code
app.get("/bfhl", (req, res) => {
    res.json({ operation_code: 1 });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
