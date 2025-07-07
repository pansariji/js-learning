let score = "33abc"
console.log(typeof score);
let valueInNumber = Number(score)
console.log(typeof valueInNumber); 
console.log(valueInNumber); 
//33 => 33
// "33abc" => NaN (Not a Number)


let marks = null
console.log(typeof marks);
let valueInNumbers = Number(marks)
console.log(typeof valueInNumbers);
console.log(valueInNumbers)
// null => 0


let isLoggedIn = true
console.log(typeof isLoggedIn);
let valueInNumberss = Number(isLoggedIn)
console.log(typeof valueInNumberss);
console.log(valueInNumberss)
// true => 1
// false => 0

let bolleanIsLoggedIn = 0 
let valueInBoolean = Boolean(bolleanIsLoggedIn)
console.log(typeof valueInBoolean);
console.log(valueInBoolean);
// 0=> false , 1=>true
// "" => false, "abc" => true 


//**************************OPERATIONS**************************//

let value= 3
let negValue = -value
console.log(negValue)

//postfix=> use first , change later
let x = 3
const y = x++
console.log(x);

//prefix => change first, use later
let x2 = 3
const y2 = ++x
console.log(x,y);







