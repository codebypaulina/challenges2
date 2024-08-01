console.clear();

/*
1. Create the data for a small social media post. Create a const variable for each data point listed below.:
	- a title
	- a text
	- the number of likes
	- the user who created the post
	- a boolean called isReported
*/

// --v-- write your code here --v--
const title = "This is the title of the post";
const content = "This is the content of the post";
let likes = 5; // "const" changed to "let" //
const userCreatedPost = "Paulina";
const isReported = false;
// --^-- write your code here --^--

/*
2. Log all variables to the console. Increase the likes by one and log the amount of likes again. Adapt your code from 1.1 if necessary.
*/

// --v-- write your code here --v--
console.log(title);
console.log(content);
console.log(likes);
console.log(userCreatedPost);
console.log(isReported);

likes = likes + 1; //  or:  likes = 5 + 1,  or:  likes += 1   //

console.log(likes);
// --^-- write your code here --^--
