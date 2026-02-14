//for
 for (let index = 0; index<10; index++){
    const element = index;
    if(element == 5){
      console.log("5 is best number")
    }
    console.log(element)
 }

for (let i = 1; i<=10; i++){
  // console.log("Outer loop value:",i)
   for(let j = 1; j<=10; j++){
      //console.log(`inner loop value ${j}`);

   }
}

let myArray = ["flash","batman","superman"]
 for(let i = 0; i<myArray.length; i++){
   const element = myArray[i];
   //console.log(element)
 }
 //break and continue

 for(let j = 1; j<=20; j++){
   if(j == 5){
      console.log(`detected 5`)
      //break; // break keyword stop the loop 
      continue //continue keyword skip the one iteration in  loop
   }
   console.log(`value  of j is ${j}`);

 }