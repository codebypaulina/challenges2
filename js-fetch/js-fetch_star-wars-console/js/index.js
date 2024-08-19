console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  // use a `try...catch` block
  try {
    const response = await fetch(url); // make sure to wait for all asynchronous operations

    // log the entire data object
    const data = await response.json(); // make sure to wait for all asynchronous operations
    console.log("data: ", data);

    // log different values of the data object
    console.log("Name of the third character: ", data.results[2].name);
    const shortCharacters = data.results.filter(
      (character) => character.height < 100
    );
    console.log("All characters with a height under 1m: ", shortCharacters);

    // Bonus: Can you log the eye color of R2-D2?
    const r2d2 = data.results.find((character) => character.name === "R2-D2");
    console.log("Eye color of R2D2: ", r2d2.eye_color);

    // make sure to handle bad responses from the API as well
    if (!response.ok) {
      console.log("Bad response.", response.status);
      return;
    }
  } catch (error) {
    console.log("Oops! Something went wrong. Try again.", error);
  }
}

fetchData();
