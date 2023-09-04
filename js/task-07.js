const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");
const resizing = () => {
  span.style.fontSize = input.value + "px";
};

input.addEventListener("input", resizing);
console.log(input.value);
