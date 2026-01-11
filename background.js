let lastElement = null;

chrome.runtime.onMessage.addListener((message) => {
  if (message.action === "ELEMENT_FOCUSED") {
    lastElement = message.element;
  }
});


