console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  // write your code here
  // Inside both event listeners, save the current values of both pizza inputs in two variables `pizzaSize1` and `pizzaSize2`
  // You can use the queried elements and get their value like this: `pizzaInput.value`
  const pizzaSize1 = pizzaInput1.value;
  const pizzaSize2 = pizzaInput2.value;

  // Now call the function and pass in the two pizza sizes as the arguments.
  calculatePizzaGain(pizzaSize1, pizzaSize2);

  // Call this function in both event listeners and pass in the correct pizza element and the correct pizza size.
  updatePizzaDisplay(pizza1, pizzaSize1);

  // Use this function in both event listeners with the correct sizes as arguments.
  updateOutputColor(pizzaSize1, pizzaSize2);
});

pizzaInput2.addEventListener("input", () => {
  // write your code here
  const pizzaSize1 = pizzaInput1.value;
  const pizzaSize2 = pizzaInput2.value;

  calculatePizzaGain(pizzaSize1, pizzaSize2);
  updatePizzaDisplay(pizza2, pizzaSize2);
  updateOutputColor(pizzaSize1, pizzaSize2);
});

// Task 1
// define the function calculatePizzaGain here
// Write a function `calculatePizzaGain` which expects the two diameters of the two pizzas: `diameter1` and `diameter2`
function calculatePizzaGain(diameter1, diameter2) {
  // Inside this function, calculate the areas of both pizzas
  const radius1 = diameter1 / 2;
  const radius2 = diameter2 / 2;
  const area1 = Math.PI * (radius1 * radius1);
  const area2 = Math.PI * (radius2 * radius2);

  // Calculate the pizza gain in percent relative to the first pizza
  const pizzaGain = ((area2 - area1) / area1) * 100;

  // Set the `textContent` of the output element to that value.
  // Use `Math.round(calculatedValue)` to round the pizza gain to the next whole integer value.
  output.textContent = Math.round(pizzaGain);
}

// Task 2
// define the function updatePizzaDisplay here
// Write a function `updatePizzaDisplay` which has two parameters:
// `pizzaElement`: the queried DOM element of the respective pizza and `newSize` which is the new size of that pizza.
function updatePizzaDisplay(pizzaElement, newSize) {
  // Calculate the new display size of the pizza element
  // The formula is: `newSize / 24 * 100`.
  const newDisplaySize = (newSize / 24) * 100;
  // Set the width of the `pizzaElement` to this new value.
  // You can use `pizzaElement.style.width` for that.
  // The width needs a unit, a simple number is not enough. Don't forget to concat "px" to your calculated number.
  pizzaElement.style.width = newDisplaySize + "px";
}

// Task 3
// define the function updateOutputColor here
// Write a function `updateOutputColor` with two parameters: `size1` and `size2`.
function updateOutputColor(size1, size2) {
  // Set the background color of the `outputSection` to "var(--red)", if we loose pizza.
  // Otherwise, the background color should be set to "var(--green)"
  outputSection.style.backgroundColor =
    size2 < size1 ? "var(--red)" : "var(--green)";
}
