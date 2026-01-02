//Primitive
/*7 types : String, Number , Boolean, null, undefined, Symbol*/

const score=100;
const scoreValue=100.3;

const isLoggeedIn= false;
const outsideTemp=null;
console.log(typeof outsideTemp)//object
let userEmail;
const id=Symbol('123');
const anotherId=Symbol('123');
console.log(id===anotherId);//false
const bignumber=123456789n;
console.log(typeof bignumber)//bigint

 //Reference(Non-Primitive)
/*object, Array, Function*/
const heros=['shaktiman','nagroaj','doga'];
let myObj={
    name:"Pratik",
    age:24,
}
const myfunc=function(){
    console.log("Hello World");
}
console.log(typeof myfunc())//undefined