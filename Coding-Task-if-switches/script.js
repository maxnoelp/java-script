const size = 25;
let result;

if (size > 10) {
  result = "Greater than 20";
} else if (size > 20) {
  result = "Greater than 10";
} else {
  result = "Lower than 10";
}

console.log(result);
// Returns Greater than 10 but should return Greater than 20

// TODO: Implement the oddEven function
// odd number
function oddEven(n) {
  return Math.abs(n % 2) == 1;
}

/* Even number 
function Even(number) {
  return number % 2 === 0;
} */

console.log(oddEven(4));
// result should be even

console.log(oddEven(3));
// result should be odd

console.log(oddEven(-1));
// result should be odd

console.log(oddEven(10));
// result should be even

// TODO: Implement the oldYoung function

console.log(oldYoung(-1));
// result should be invalid parameter

console.log(oldYoung(27));
// result should be young person

console.log(oldYoung(6));
// result should be children

console.log(oldYoung(86));
// result should be elder person

function oldYoung(number) {
  if (number <= 0 || typeof number === "string") {
    return "invalid Parameter";
  }

  if (number < 16) {
    return "children";
  }
  if (number < 50) {
    return "young person";
  }
  if (number >= 50) {
    return "elder person";
  }
}
