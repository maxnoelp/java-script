const animals = ["Dog", "Cat", "Lion"];

function removeItem(array, index) {
  let newArray = array.slice();
  if ((index >= 0, index < newArray.length)) {
    newArray.splice(index, 1);
  }
  return newArray;
}

console.log(removeItem(animals, 1));

console.log(animals);
// result should be: ["Dog", "Lion"]

const fruits = ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"];

console.log(removeItem(fruits, 2));
// result should be: ["Watermelon", "Banana", "Kiwi", "Pineapple", "Apple"]

console.log(fruits);
// result should be still: ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"]

const arr1 = ["Luke", "Anakin", true, "Obi Wan", 333];
console.log(sumOfCharacters(arr1));

//console.log(sumOfCharacters(arr1));
// result should be: 17

function sumOfCharacters(array) {
  return array.reduce((sum, item) => {
    if (typeof item === "string") {
      return sum + item.length;
    }
    return sum;
  }, 0);
}

const arr2 = [
  "Code is",
  "like humor",
  ".",
  "When you have",
  "to explain it, it's bad!",
];
console.log(sumOfCharacters(arr2));
// result should be: 55
