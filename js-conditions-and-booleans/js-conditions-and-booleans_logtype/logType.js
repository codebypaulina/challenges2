/**********************************************************************************************************************

--- LogType ---
1. Create a file named logType.js.
2. Declare a variable named data.
3. Write a switch statement that takes the typeof data and logs a different string depending on the type/value of data.

The string it logs should be one of the following:
- "undefined!"
- "null!"
- "number!"
- "not a number!"
- "string!"
- "boolean!"
- "bigint!"
- "function!"
- "object!"
- "array!"
- "I have no idea!"

💡 you will need to google for object and array.

--- Development ---
To run the LogType challenge, there are two main options:
- In VSCode, go to Run -> Run Without Debugging
- From your terminal. Change to the folder where the file is. Then run the command node fileName.js

**********************************************************************************************************************/

let data = {};

switch (typeof data) {
  case "undefined":
    console.log("undefined!");
    break;
  /* case "number":
    console.log("number!");
    break; */
  case "number":
    console.log(
      isNaN(data) ? "not a number!" : "number!"
    ); /**** = ist typeof "data" keine Nummer? dann "not a number!", ansonsten "number!" ****/
    break;
  case "string":
    console.log("string!");
    break;
  case "boolean":
    console.log("boolean!");
    break;
  case "bigint":
    console.log("bigint!");
    break;
  case "function":
    console.log("function!");
    break;
  case "object":
    console.log(
      data === null ? "null!" : Array.isArray(data) ? "array!" : "object!"
    ); /**** = ist typeof "data" null? dann "null!". wenn nicht: ist typeof "data" array? dann "array!". wenn nicht, dann "object!" ****/
    break;
  default:
    console.log("I have no idea!");
    break;
}
