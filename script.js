document.addEventListener("DOMContentLoaded", () => {
    const messagesContainer = document.getElementById("messages");
    const userInput = document.getElementById("user-input");
    const sendBtn = document.getElementById("send-btn");

    function appendMessage(sender, text) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add(sender);
        messageDiv.innerText = text;
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    function sendMessage() {
        const message = userInput.value.trim();
        if (message === "") return;
        
        appendMessage("user", "You: " + message);
        userInput.value = "";
        
        // Simulate bot response
        setTimeout(() => {
            appendMessage("bot", "Bot: I'm still learning! Please check the study resources.");
        }, 1000);
    }

    sendBtn.addEventListener("click", sendMessage);
    userInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") sendMessage();
    });
});
