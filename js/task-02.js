const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
let list = document.querySelector("#ingredients");
const ingredientsArr = ingredients.map((ingredient) => {
  const item = document.createElement("li");
  item.textContent = ingredient;
  item.classList.add("item");
  console.log(item);
  return item;
});
list.append(...ingredientsArr);
