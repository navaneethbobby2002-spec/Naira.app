const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const responseBox = document.getElementById("responseBox");

sendBtn.addEventListener("click", function () {
  const message = userInput.value.trim().toLowerCase();

  if (message === "") {
    responseBox.textContent = "Please type something first.";
  } else if (message === "hello") {
    responseBox.textContent = "Hello sir, I am Naira.";
  } else if (message === "who are you") {
    responseBox.textContent = "I am Naira, your personal AI assistant.";
  } else if (message === "how are you") {
    responseBox.textContent = "I am working well, sir.";
  } else {
    responseBox.textContent = "Sorry sir, I do not understand that yet.";
  }

  userInput.value = "";
});
