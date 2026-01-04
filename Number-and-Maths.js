const score = 400
const balance = new Number(1000)
console.log(typeof score + " "+ typeof balance)//number And object
console.log(score+" "+balance)
console.log(balance.toString().length)//here we are conver ting number object to string snd now 
//we can use all string methods on it
console.log(balance.toFixed(2))//1000.00 
//it will convert number to in fixed two or more(given argument of methotds)
// decimal points
const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4))//123
//it will round off the number based on given argument in method

const hunderd= 1000000
console.log(hunderd.toLocaleString("en-IN"))//10,00,000
//it will convert number into given locale format (languge-country name)

