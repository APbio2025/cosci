document.addEventListener("DOMContentLoaded", function() {
    const chatbox = document.getElementById("chatbox");
    const userInput = document.getElementById("userInput");

    function sendMessage() {
        let message = userInput.value.trim();
        if (!message) return;

        // Display user message
        let userMessageDiv = document.createElement("div");
        userMessageDiv.className = "user-message";
        userMessageDiv.textContent = message;
        chatbox.appendChild(userMessageDiv);
        userInput.value = "";

        // Fetch response from the chatbot API
        fetch("http://localhost:3000/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: message })
        })
        .then(response => response.json())
        .then(data => {
            let botMessageDiv = document.createElement("div");
            botMessageDiv.className = "bot-message";
            botMessageDiv.textContent = data.response;
            chatbox.appendChild(botMessageDiv);
        })
        .catch(error => console.error("Error:", error));
    }

    document.querySelector("button").addEventListener("click", sendMessage);
    userInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") sendMessage();
    });
});
