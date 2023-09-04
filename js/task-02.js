const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");

ingredients.forEach(function (ingredient, index) {
  const item = document.createElement("li");
  list.append(item);
  item.textContent = ingredient;
  item.classList.add("item");
});
console.log(list);
