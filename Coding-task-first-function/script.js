// TODO: implement welcomeMsg function

console.log(welcomeMsg("Jane"));

// Welcome Jane!

console.log(welcomeMsg("Marc"));
// Welcome Marc!

function welcomeMsg(userName) {
  return "Welcome " + userName;
}

// TODO: Implement the addPositive function

console.log(addPositive1(2, 3));
// result1 should be 5

function addPositive1() {
  return Math.abs(2 + 3);
}

console.log(addPositive(3, -5));
// result2 should be 8

function addPositive() {
  return Math.abs(3 + 5);
}

console.log(addPositive(-1, -8));
// result2 should be 9
