let counterValue = 0;
const counter = document.querySelector("#counter");
const display = document.querySelector("#value");
const dec = counter.firstElementChild;
const inc = counter.lastElementChild;
const decrement = (event) => {
  counterValue -= 1;
  display.innerHTML = counterValue;
};
const increment = (event) => {
  counterValue += 1;
  display.innerHTML = counterValue;
};

dec.addEventListener("click", decrement);
inc.addEventListener("click", increment);
