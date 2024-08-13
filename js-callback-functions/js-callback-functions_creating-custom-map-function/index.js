/*********************************************************************************************************************************************

Create a custom `myMap` function that takes an array and a callback function as parameters.
It should apply the callback function to each element in the array, double each number, and return a new array containing the doubled numbers.

1. [] Create a function named `myMap` that takes two parameters: an array of numbers `numbers` and a callback function `double`.
2. [] Inside the `myMap` function, initialize an empty array to store the results.
3. [] Use a loop, such as a `for` loop, to iterate through the elements of the input array.
4. [] In each iteration of the loop, call the provided callback function with the current element as an argument to double the number.
5. [] Store the doubled result in the new array created in step 2.
6. [] After processing all elements, return the new array containing the doubled numbers.
7. [] Create a callback function `double`, that doubles a given number. This function should take an element as input and return the doubled value.
8. [] Use the `myMap` function with the array of numbers and the `double` callback function to create a new array containing the doubled numbers.

*** You can use the following array as a test case:

    const numbers = [1, 2, 3, 4, 5];


***💡 Hint:

    function myMap(numbers, double) {
    // Your logic goes here
    }

    function double(number) {
    return number * 2;
    }

    const doubledNumbers = myMap(numbers, double);
    console.log(doubledNumbers); // Output should be [2, 4, 6, 8, 10]

*********************************************************************************************************************************************/

const numbers = [1, 2, 3, 4, 5];

function myMap(numbers, double) {
  let result = [];

  for (let i = 0; i < numbers.length; i++) {
    const resultDoubled = double(numbers[i]);

    result.push(resultDoubled);
  }
  return result;
}

function double(number) {
  return number * 2;
}

const doubledNumbers = myMap(numbers, double);
console.log(`The doubled result is: `, doubledNumbers);
