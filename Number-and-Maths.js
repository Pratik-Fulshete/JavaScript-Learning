const score = 400
const balance = new Number(1000)
console.log(typeof score + " "+ typeof balance)//number And object
console.log(score+" "+balance)
console.log(balance.toString().length)//here we are converting number object to strings and now 
//we can use all string methods on it
console.log(balance.toFixed(2))//1000.00 
//it will convert number to in fixed two or more(given argument of methotds)
// decimal points
const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4))//123
//it will round off the number based on given argument in method

const hunderd= 1000000
console.log(hunderd.toLocaleString("en-IN"))//10,00,000
//it will convert number into given locale format (languge-country name)]
//Maths
console.log(Math)
console.log(Math.abs(-4)) //Absoulet value will gives 
console.log(Math.round(4.4))//4 here if we adds greater than 5 or 5 number after decimal point then 
//it give answer next number here answer will change ex.round(4.6) => 5
console.log(Math.ceil(4.2)) //5 it will give always greater number if we add decimal points
console.log(Math.floor(4.9))//4 it will give always lowest number if we add decimal points
console.log(Math.min(4,6,8,3))// 3 it will give minimum value from array
console.log(Math.max(4,6,8,3))// 8 it will give maximum value from array

console.log(Math.random()) // it will give random values range of that values is 0 - 1
console.log(Math.random()*10+1) // this is formula for increases the rang of random values
console.log(Math.floor(Math.random()*10)+1); // we can use all method all functions like this in js
const min = 10
const max = 20
console.log(Math.floor(Math.random()* (max - min +1))+min)







