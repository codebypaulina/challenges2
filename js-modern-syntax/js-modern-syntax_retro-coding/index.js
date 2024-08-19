/************************************************* Retro Coding Challenge *************************************************

Pretend that it is 2002 and rewrite the following hipster Javascript so it will work in Internet Explorer 5 and Netscape 4.

let getNameAndCountry = ({ name, country }) => [name, country];
let getRelocatedCity = (
  city1,
  city2 = { name: "Berlin", country: "Germany" }
) => {
  let [, country] = getNameAndCountry(city2);
  return {
    ...city1,
    country,
  };
};

💡 Hints:
1. From Arrow Functions to Classic Functions:
   - Remember that older JavaScript versions do not recognize arrow functions (=>).
   - Use the traditional function keyword to declare functions instead.
2. Manual Property Access:
   - Since object destructuring is a more recent feature, you'll need to revert to accessing object properties the old-fashioned way.
   - Use dot notation or bracket notation to get values from objects.
3. Default Parameters Workaround:
   - To emulate this behavior, check if function parameters are undefined within the function body and manually assign them default values if necessary.
4. Object Copying without Spread:
   - To combine objects or copy them, initiate a new object and loop through properties of the source object(s), copying each property explicitly.

 **************************************************************************************************************************/
