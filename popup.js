import { getTestSuggestions } from "./rules.js";

const list = document.getElementById("suggestions");

chrome.runtime.onMessage.addListener((message) => {
  if (message.action === "ELEMENT_FOCUSED") {
    list.innerHTML = "";
    const suggestions = getTestSuggestions(message.data);

    suggestions.forEach(s => {
      const li = document.createElement("li");
      li.textContent = s;
      list.appendChild(li);
    });
  }
});
