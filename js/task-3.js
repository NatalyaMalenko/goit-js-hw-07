const inputText = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");
inputText.addEventListener("input", (event) => {
  if (inputText.value.trim() === "") {
    outputName.textContent = "Anonymous!";
  } else outputName.textContent = inputText.value.trim();
});
