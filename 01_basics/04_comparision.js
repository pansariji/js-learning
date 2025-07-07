console.log(2==2);
console.log(2>3);
console.log(2<3);
console.log(2!=3);
//no problem when datatype is same.

console.log(null == 0);
console.log(null>0);  // => false
console.log(null<0);
console.log(null>=0);    // => true
//datatypes are diff so due to conversion we get undesired output.
//same goes for undefined

console.log("2" > 1);  // => true
// due to conversion it treats strng ang int as same.

console.log("2" === 2); // => false
// === is strict check , it check whether the datatype is same or not.






