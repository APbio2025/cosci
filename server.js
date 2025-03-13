const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Function to fetch response from a .txt file
const getResponse = (question) => {
    const sanitizedQuestion = question.replace(/[^a-zA-Z0-9 ]/g, "").toLowerCase();
    const filePath = path.join(__dirname, "responses", `${sanitizedQuestion}.txt`);
    
    if (fs.existsSync(filePath)) {
        return fs.readFileSync(filePath, "utf-8");
    } else {
        return "Sorry, I don't have an answer for that.";
    }
};

// Chatbot API Endpoint
app.post("/chat", (req, res) => {
    const userMessage = req.body.message.trim();
    const botResponse = getResponse(userMessage);
    res.json({ response: botResponse });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Chatbot API is running on http://localhost:${PORT}`);
});
