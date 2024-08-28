function points(games) {
  // create a variable points
  let points = 0;
  // for every result in the list:
  for (let i = 0; i < games.length; i++) {
    // first num is in index 0, second num is in index 2
    const x = games[i][0];
    const y = games[i][2];
    // check if the first number is bigger than the second number
    // -> add 3 to points
    if (x > y) {
      points += 3;
    } else if (x === y)
  }
  // after the loop -> return points
  return points;
}

points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"]);

// Expected: 30
/*
  if x > y: 3 points (win)
  if x < y: 0 points (loss)
  if x = y: 1 point (tie)
  */

console.log(
  points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])
);



function points(game) {
    let points = 0;

    for (let game of games) {
        if (game[0] > game[2]) {
            points += 3
        }
        if (game[0] === game[2]) {
            points++
        }
    }
    return points

}