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
function loginUserMessage(username){
    if(username === undefined){
        return "Please enter a username"
    }
return `${username} just logged in`
}
//console.log(loginUserMessage("hitesh")) 
//console.log(loginUserMessage()) //it gives answer undefined

//imp for project
 
 function addCartPrice(val1,val2,...num1){ //rest operator
 console.log(val1," : ",val2)
return num1
 }
 console.log(addCartPrice(100,400,500,600))//here 1st two will  stored in val1,val2 last two stored in  num1
//work with object in function
const user = {
    username:"hitesh",
    price:400,
    item : "T-shirt"
}
 function handleObject(obj){
    console.log(`Username is ${obj.username} and price is ${obj.price} and item is ${obj.item}`)

 }
 // handleObject(user) //way 1st passing object as parameter
 handleObject({username:"pratik",
 price:199,
 item: "shirt"})// way 2nd passing object as parameter
 //work with array in function
 const myArray =[1,23,45,56]

 function handleArray(arr){
    return arr[1]
 }
 //console.log(handleArray(myArray)) // way 1 for passing parameter
 console.log([200,300,400]) //way 2 for passing parameter