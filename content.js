document.addEventListener("focusin", (event) => {
  const el = event.target;

  if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
    chrome.runtime.sendMessage({
      action: "ELEMENT_FOCUSED",
      data: {
        tag: el.tagName,
        type: el.type || "text",
        placeholder: el.placeholder || "",
        required: el.required || false
      }
    });
  }
});
