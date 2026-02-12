//if 
 if (2==2){
    console.log("2 is equal to 2")
 }

 //if else
 const age = 18
 if(age>=18){
    console.log("eligible fo voting")
 }else{
    console.log("not eligible for voting")
 }
  
  //short hand if else

  const balance = 1000
  balance>500 ? console.log("sufficient balance"):console.log("in sufficient balance")
   
   if(balance<500){
      console.log("less than 500")
   }else if(balance<750){
      console.log("less than 750")
   } 
   const userLoggedIn = true;
   const DebitCard=true;

   if(userLoggedIn && DebitCard ){ // and operator
      console.log("Allow to buy course")
   }

   if(userLoggedIn || DebitCard){ //or operator
      console.log("Allow to buy course")
   }
   const userEmail = "pratik@gmail.com";
   if(userEmail){
      console.log("email is gotted!")
   }else{
      console.log("email is not gotted!")
   }

   //falsy values in js
   // false, 0,-0,BigInt 0n,"" (empty String),null, undefined,NaN

  //Truthy values in js
  // true ," "(space in string), "0" (string with 0),
  //[] (empty array),{} (empty object),function(){}(empty function)

  //way of checking array in conditional Statement
  const arr =[]
  if(arr.length>0){
   console.log("array is not empty")
  }else{
   console.log("array is empty")
  }

  // way of checking object in conditional Statement
  const obj ={}
  if(Object.keys(obj).length==0){
   console.log("object is empty")
  }
  //Nullish coalescing operator(??):null or undefined value checking
  let val1;
  //val1 = 5 ?? 10;// here if first value is null or undefined then it will take 
                 //2nd value otherwise it will take 1st value
 //val1 = null ?? 10; //here answer is 10 because first value is null
 //val1 = undefined ?? 10; // here also same answer 
 val1 = null ?? 10 ?? 20;// here answer is 10 if second value also null or undefined it 
                         // gives answer 20 ex: null?? undefined??20 
  console.log(val1)