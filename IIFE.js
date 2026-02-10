//Immediately Invoked Function expression = IIFE
(function DBConnect(){ //named IIFE 
    console.log("DB Connected")
}) 
();//here we create a function and call it immediately without storing in any variable
  //it is avoid global scope pollution and it create a private scope for the function and variables 
  //it is use for encapsulation and data privacy in js
  (
    (DB) =>{ //unnamed IIFE 
        console.log("DB Connected with arrow function",DB)
        console.log(`DB Name is ${DB}`)
    }
  ) ("MongoDB");//here we pass argument  and end code using semicolon to avoid error in IIFE