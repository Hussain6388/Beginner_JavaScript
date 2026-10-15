let score = "22"

console.log(typeof(score));

let value = Number(score);
console.log(typeof(value)); // number
console.log(value);         // 22



 score = "22abc" // or undefined -> NaN

console.log(typeof(score));

let val = Number(score);
console.log(typeof(val));  // number
console.log(val);          //  NaN


score = null

console.log(typeof(score));

let v = Number(score);
console.log(typeof(v));  // number
console.log(v);          //  0




// bollean conversion 
// 1 or anything => true; 0 => false
// "" => false; "sdj" => true
let b = 199;
let booleanis = Boolean(b);
console.log(booleanis);



