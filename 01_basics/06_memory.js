// Stack - use in primitive datatypes
// Heap - use in Refrence datatypes

// --------stack--------
let myName = "Madhav Aggarwal"
let friendName = "amrit"
friendName = "Deepak"
console.log(myName)
console.log(friendName)
// in stack u get copy of values so on changing second variable first variable doesn't change.

// --------heap--------
let userOne = {
    name: "Madhav Aggarwal",
    age: 25
}
let userTwo = userOne
userTwo.name = "Deepak"
console.log(userOne.name)
console.log(userTwo.name)
// in heap u get reference of object so on changing second variable first variable also changes.