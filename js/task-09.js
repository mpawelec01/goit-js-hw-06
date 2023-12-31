function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const widget = document.querySelector(".widget");
const button = document.querySelector(".change-color");

const changeColor = () => {
  widget.parentElement.style.backgroundColor = getRandomHexColor();
  widget.firstElementChild.firstElementChild.textContent = getRandomHexColor();
};

button.addEventListener("click", changeColor);
