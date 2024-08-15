console.clear();

const animalStrings = [
  "cat",
  "dog",
  "elephant",
  "rabbit",
  "lion",
  "tiger",
  "horse",
  "giraffe",
  "zebra",
  "penguin",
  "polar bear",
  "panda",
  "koala",
  "kangoroo",
  "monkey",
  "sloth",
  "hippo",
  "rhino",
];

const hippoExists = animalStrings.includes("hippo");
console.log("hippoExists:", hippoExists);

// Hint: You can pass the starting index as second parameter.
const catStartingFromIndexFiveExists = animalStrings.includes("cat", 5);
console.log("catStartingFromIndexFiveExists:", catStartingFromIndexFiveExists);

// Hint: Besides the array method, check out the string method `startsWith()`.
const firstAnimalStartingWithLetterP = animalStrings.find((animal) => {
  return animal.startsWith("p");
});
console.log("firstAnimalStartingWithLetterP:", firstAnimalStartingWithLetterP);

const indexOfGiraffe = animalStrings.findIndex((animal) => {
  return animal === "giraffe";
});
console.log("indexOfGiraffe:", indexOfGiraffe);
// implicit return:
const indexOfGiraffe2 = animalStrings.findIndex(
  (animal) => animal === "giraffe"
);
console.log("indexOfGiraffe2:", indexOfGiraffe2);

// Note:
// - Sorting strings is slightly more complicated than sorting numbers.
// - You will need if-statements and return values of -1, 1, and 0.
// - Check out MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// Hint: There is no need to upper-/lowercase the strings before sorting them.
// Hint: sort() mutates the original array, which is bad.
// -> Use animals.slice().sort(...) to make a copy.
const animalsSortedAlphabetically = animalStrings.slice().sort();
console.log("animalsSortedAlphabetically:", animalsSortedAlphabetically);

// Hint: Guess what? There is a string method called `endsWith()`.
const anyAnimalEndsWithLetterZ = animalStrings.some((animal) =>
  animal.endsWith("z")
);
console.log("anyAnimalEndsWithLetterZ:", anyAnimalEndsWithLetterZ);

const everyAnimalHasMoreThanTwoLetters = animalStrings.every(
  (animal) => animal.length > 2
);
console.log(
  "everyAnimalHasMoreThanTwoLetters:",
  everyAnimalHasMoreThanTwoLetters
);

// Hint: There are several ways to go here. Let's focus on two options:
// ----- Option 1: Concatenate all characters with `reduce()` and check for the `length` property of the result.
// --------------- reduce-syntax: array.reduce(callback(accumulator, currentValue), initialValue);
const sumOfAllAnimalCharacters1 = animalStrings.reduce(
  (accSum, currAnimal) => accSum + currAnimal.length, // accSum: Akkumulator, der die Summe der Zeichenlängen speichert // currAnimal.length: Länge des aktuellen Tiernamens wird zur Summe hinzugefügt
  0 // initialer Wert des Akkumulators: Startwert für die Summierung
);
console.log("sumOfAllAnimalCharacters1", sumOfAllAnimalCharacters1);

// ----- Option 2: Use `map()` to create an array with the length values of all strings, then sum them up with `reduce()` (keyword: method chaining).
const sumOfAllAnimalCharacters2 = animalStrings
  .map((animal) => animal.length) // erstellt neues Array, das nur die Längen der Tiernamen enthält
  .reduce((accSum, currAnimal) => accSum + currAnimal); // summiert alle Werte in diesem Array
console.log("sumOfAllAnimalCharacters2", sumOfAllAnimalCharacters2);

export {
  hippoExists,
  catStartingFromIndexFiveExists,
  firstAnimalStartingWithLetterP,
  indexOfGiraffe,
  indexOfGiraffe2,
  animalsSortedAlphabetically,
  anyAnimalEndsWithLetterZ,
  everyAnimalHasMoreThanTwoLetters,
  sumOfAllAnimalCharacters1,
  sumOfAllAnimalCharacters2,
};
