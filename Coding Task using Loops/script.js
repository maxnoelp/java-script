// TODO: Implement the oddNumbers function

console.log(oddNumbers(0, 4));
// result should be: 1,3

console.log(oddNumbers(10, 33));
// result should be: 11,13,15,17,19,21,23,25,27,29,31,33

console.log(oddNumbers(9, 12));
// result should be: 9,11

function oddNumbers(start, end) {
  let result = "";
  if (start >= 0 && end >= 0) {
    for (let index = start; index <= end; index++) {
      if (index % 2 !== 0) {
        if (result !== "") {
          result = result + "," + index;
        } else {
          result = result + index;
        }
      }
    }
    return result;
  }
}

// TODO: Implement the charCount function

console.log(charCount("hello", "l"));
// result should be: 2

console.log(charCount("Mama", "m"));
// result should be: 2

console.log(charCount("Resümee", "ü"));
// result should be: 3

function charCount(word, char) {
  let result;
  for (let index = 0; index < word.length; index++) {
    const charCount = word[index];
    if (charCount === char) {
      result = index;
      break;
    }
  }
  return result;
}
