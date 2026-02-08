let a = 100
const b = 200
var c =300
//global scope
if (true){
    //block scope
    var c = 30

    let a = 10
    const b = 20
    //console.log("inner let & const:",a,b)//it will print inner value of a and b as they are block scope
}
//console.log(a)// no problem with let and const as they are block scope
//console.log(b)
//console.log(c)// var can access inner value in global scope that why avoid var always or use less
 
// works with nested scope
 function one(){
    //scope 1
    const username = "hitesh"
  function two(){
    //scope 2
    const website = "linkedIn"
    console.log(username)//here we can access outer scopes value in inner scope 
  }
    two() // here we call inner function in outer function
    //console.log(website)// here we can't access inner scope value in  outer scope that why it will gives error
 }
 //one()

 if (true){
    const username = "pratik"
    if(username ==="pratik"){
        const website = "github"
        //console.log(username,website)// here we can access username and website as they are in same block scope
    }
    //console.log(website) //gives error as website in inner  scope
 }
 //console.log(username)//gives error as username in block scopes

//intersting part  this concept is called hoisting in js we  can study in future
addone(5) // here no error
 function addone(num){
    return num + 1
 }
 
 //addTwo(4) //here give error because of hoisting 
 const addTwo = function(num){
    return num + 2
 }//function expression
 //addTwo(4)