const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
// trzeba pobrac wartosc z input i wstawic do output
// ustawic zdarzenie input
// jesli pole input jest puste w output widnieje "Anonymous"

const nameDisplay = (event) => {
  if (input.value === "") {
    return (output.textContent = "Anonymous");
  } else {
    output.textContent = event.currentTarget.value;
  }
};
input.addEventListener("input", nameDisplay);
