function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxContainer = document.querySelector(".box-container");
const createButton = document.querySelector(".create-btn");
const destroyButton = document.querySelector(".destroy-btn");

createButton.addEventListener("click", handleCreateButtonClick);
destroyButton.addEventListener("click", handleDestroyButtonClick);

function createBoxes(amount) {
  const boxesContainer = document.getElementById("boxes");

  boxesContainer.innerHTML = "";

  const boxesArray = [];

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    const size = 30 + i * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesArray.push(box);
  }

  boxesContainer.append(...boxesArray);
}

function destroyBoxes() {
  const boxesContainer = document.getElementById("boxes");
  boxesContainer.innerHTML = "";
}

function handleCreateButtonClick() {
  const input = document.querySelector(".input-number");
  const amount = parseInt(input.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  } else {
    alert("Please enter a number between 1 and 100.");
  }
  input.value = "";
}

function handleDestroyButtonClick() {
  destroyBoxes();
}
