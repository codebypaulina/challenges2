function count(string) {
  // TODO
  const obj = {};
  // iterate over string
  for (let char of string) {
    // option 1: char is not in obj
    // -> add char : val will be 1
    if (!obj[char]) {
      obj[char] = 1;
    } else {
      // option 2: char is in obj
      // -> increment value of this key by 1
      obj[char] = obj[char] + 1; //  OR: obj[char] += 1   //   OR: obj[char]++
    }
  }
  // after loop is done we return obj
  return obj;
}

console.log(count("aba"));
console.log(count("abbza"));
console.log(count(""));
