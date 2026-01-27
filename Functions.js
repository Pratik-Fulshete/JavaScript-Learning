function printMyname(){
    console.log("Pratik")
}
printMyname() 
// non return type
function addTwoNumbers(num1, num2){
    console.log(num1 + num2);
}
addTwoNumbers() //without parameter this will give NaN as output
addTwoNumbers(4,5)
addTwoNumbers(4,'5') // concatetion happens here
addTwoNumbers(4,'a')//same as 
addTwoNumbers(4,null) // only gives answer 4

//returntype

function Addition(number1,number2){
   const result = number1 + number2
    return result
}
const answer =  Addition(12,23)
console.log(answer)