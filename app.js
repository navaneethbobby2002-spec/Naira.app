const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const responseBox = document.getElementById("responseBox");

function replyToUser(message) {
  const text = message.trim().toLowerCase();

  if (text === "") {
    return "Please type something first.";
  } else if (text === "hello" || text === "hi") {
    return "Hello sir, I am Naira.";
  } else if (text === "who are you") {
    return "I am Naira, your personal AI assistant.";
  } else if (text === "how are you") {
    return "I am working well, sir.";
  } else if (text === "what is your name") {
    return "My name is Naira.";
  } else if (text === "good morning") {
    return "Good morning sir.";
  } else if (text === "good night") {
    return "Good night sir.";
  } else if (text === "thank you" || text === "thanks") {
    return "You are welcome, sir.";
  } else if (text === "bye") {
    return "Goodbye sir.";
  } else if (text === "open trading") {
    return "Trading mode is not connected yet, but I am ready for the next version.";
  } else if (text === "can you trade") {
    return "Not yet fully, sir. Right now I am your basic assistant version.";
  } else if (text === "what can you do") {
    return "Right now I can reply to simple messages, work like an installed app, and support your next upgrades.";
  } else if (text === "naira pro") {
    return "Naira Pro will be your more advanced trading assistant version.";
  } else if (text === "is 256 gb enough") {
    return "Yes sir, 256 GB can be enough if you keep Naira light and store bigger data in the cloud.";
  } else if (text === "will you disappear") {
    return "No sir, I will stay as long as the GitHub Pages site stays live and you do not uninstall the app.";
  } else if (text === "work offline") {
    return "Basic offline support is added, sir.";
  } else {
    return "Sorry sir, I do not understand that yet.";
  }
}

function handleSend() {
  const message = userInput.value;
  const reply = replyToUser(message);
  responseBox.textContent = reply;
  userInput.value = "";
  userInput.focus();
}

sendBtn.addEventListener("click", handleSend);

userInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    handleSend();
  }
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("sw.js").catch(function () {});
  });
}
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const responseBox = document.getElementById("responseBox");

function normalizeText(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^ws]/g, "")
    .replace(/s+/g, " ");
}

function replyToUser(message) {
  const text = normalizeText(message);

  if (!text) {
    return "Please type something first, sir.";
  }

  if (text.includes("hello") || text.includes("hi")) {
    return "Hello sir, I am Naira.";
  }

  if (text.includes("who are you") || text.includes("your name")) {
    return "I am Naira, your personal AI assistant.";
  }

  if (text.includes("how are you")) {
    return "I am working well, sir.";
  }

  if (text.includes("good morning")) {
    return "Good morning sir.";
  }

  if (text.includes("good night")) {
    return "Good night sir.";
  }

  if (text.includes("thank you") || text.includes("thanks")) {
    return "You are welcome, sir.";
  }

  if (text.includes("bye")) {
    return "Goodbye sir.";
  }

  if (text.includes("what can you do") || text.includes("help")) {
    return "Right now I can reply to simple messages, work like an installed app, and support your next upgrades.";
  }

  if (text.includes("naira pro")) {
    return "Naira Pro will be your more advanced trading assistant version.";
  }

  if (text.includes("trade") || text.includes("trading")) {
    return "Trading mode is not fully connected yet, but I am ready for your next upgrade.";
  }

  if (text.includes("256 gb") || text.includes("storage")) {
    return "Yes sir, 256 GB can be enough if you keep Naira light and store bigger data in the cloud.";
  }

  if (text.includes("offline")) {
    return "Basic offline support can be added, sir.";
  }

  if (text.includes("disappear") || text.includes("gone")) {
    return "No sir, I stay available as long as your app files remain live and installed.";
  }

  if (text.includes("github")) {
    return "Yes sir, your updates should be pasted into GitHub so the live Naira app can change.";
  }

  return "Sorry sir, I do not understand that yet. Please ask in a simpler way.";
}

function handleSend() {
  const message = userInput.value;
  const reply = replyToUser(message);
  responseBox.textContent = reply;
  userInput.value = "";
  userInput.focus();
}

sendBtn.addEventListener("click", handleSend);

userInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    handleSend();
  }
});
