const score = 400
//  console.log(score);
// console.log(typeof score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 12113.8966

// console.log(otherNumber.toPrecision(3));

// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// //Negative to positive
// console.log(Math.abs(-4));
// //round up the number
// console.log(Math.round(4.6));
// //top value numbers
// console.log(Math.ceil(4.2));
// // lowest value
// console.log(Math.floor(4.9));
// //minimum numbers
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

// values comes between 0 to 1
// console.log(Math.random());
// shift the numbers into left side
// console.log(Math.random()*10);
// sometimes the values will comes like 0.1 like so avoid to this condition we are adding 1
// console.log((Math.random()*10) + 1);
//round up the lowest values
// console.log(Math.floor(Math.random()*10) + 1);

const min = 20
const max = 25

console.log(Math.floor(Math.random() * (max - min + 1)) + min)