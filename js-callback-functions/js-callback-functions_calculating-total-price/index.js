/********************************************************************************************************************************************************
 
You have an array of products with prices, and you want to calculate the total price of all products using a callback function.

1. [x] Create a function called `calculateTotalPrice` that takes two parameters `products` (an array of products) and `extractPrice` (a callback function).
2. [x] Inside the `calculateTotalPrice` function, initialize a variable `totalPrice` to keep track of the total price and set its initial value to `0`.
3. [x] Use a loop, such as a `for...of` loop, to iterate through the array of products.
4. [x] In each iteration of the loop, call the provided callback function with the current product as an argument to extract its price.
5. [x] Add the extracted price to the `totalPrice` variable in each iteration of the loop.
6. [x] After looping through all the products, return the total price as the result of the `calculateTotalPrice` function.
7. [x] Create the callback function `extractPrice`, which should take a product as input and return its price.
8. [x] Use the `calculateTotalPrice` function with the array of products and the callback function to calculate the total price.

*** You can use the following array of spices as a test case:

    const products = [
      { name: "Saffron", price: 50 },
      { name: "Cinnamon", price: 6 },
      { name: "Cardamom", price: 12 },
      { name: "Turmeric", price: 9 },
      { name: "Paprika", price: 4 },
      { name: "Garam Masala", price: 10 },
      { name: "Vanilla Bean", price: 15 },
      { name: "Coriander", price: 6 },
    ];

*** 💡 Hint:

    function calculateTotalPrice(products, extractPrice) {
      // Your logic goes here
    }

    function extractPrice(product) {
      return product.price;
    }

    const totalPrice = calculateTotalPrice(products, extractPrice);
    console.log(totalPrice); // Output should be 112

********************************************************************************************************************************************************/

const products = [
  { name: "Saffron", price: 50 },
  { name: "Cinnamon", price: 6 },
  { name: "Cardamom", price: 12 },
  { name: "Turmeric", price: 9 },
  { name: "Paprika", price: 4 },
  { name: "Garam Masala", price: 10 },
  { name: "Vanilla Bean", price: 15 },
  { name: "Coriander", price: 6 },
];

function calculateTotalPrice(products, extractPrice) {
  let totalPrice = 0;

  for (const product of products) {
    const price = extractPrice(product);
    totalPrice += price;
  }

  return totalPrice;
}

function extractPrice(product) {
  return product.price;
}

const totalPrice = calculateTotalPrice(products, extractPrice);
console.log(`The total price is ${totalPrice}.`);
