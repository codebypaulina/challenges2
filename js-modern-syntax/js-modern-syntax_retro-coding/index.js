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

// Hint 1
function getNameAndCountry(city) {
  return [city.name, city.country]; // Hint 2
}

// Hint 1
function getRelocatedCity(city1, city2) {
  // Hint 3
  if (city2 === undefined) {
    city2 = { name: "Berlin", country: "Germany" };
  }

  // Hint 4
  const country = getNameAndCountry(city2)[1]; // access to second element of `city2`-object (`country`)
  const relocatedCity = {}; // new empty object for copying the properties from `city1` & `country`

  // copy all properties from `city1` to `relocatedCity` with FOR...IN
  for (const key in city1) {
    if (city1.hasOwnProperty(key)) {
      relocatedCity[key] = city1[key]; // copy all properties from `city1` to `relocatedCity`
    }
  }

  // add new `country` property
  relocatedCity.country = country;

  return relocatedCity;
}

// test
const city1 = {
  name: "Cologne",
  state: "North Rhine-Westphalia",
  country: "",
  population: 1087353,
};
console.log(getRelocatedCity(city1));
