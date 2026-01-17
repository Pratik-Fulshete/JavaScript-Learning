//15/1/2026
// In Js all date  start january 1970
let myDate = new Date() //object creation
console.log(myDate)
//below all function gives date into different formats
console.log(myDate.toString()) // convert into string //
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)//type is object
 
 let myCreatedDate = new Date(2003,9,16)
 let myCreatedDate2 = new Date(2003,0,16)// if we give zero it will give by default jan
 console.log(myCreatedDate.toDateString())
 console.log(myCreatedDate2.toDateString())
 let myCreatedDate3 = new Date(2003-09-16) //yyyy-mm-dd
 console.log(myCreatedDate3.toLocaleString())// we use different different format
console.log(myDate.toLocaleDateString());//prints only Date in local lang format
console.log(myDate.toLocaleTimeString());//prints only Time local lang format
//use of getter functions in js
console.log("Year:"+myDate.getFullYear()+" Month:"+myDate.getMonth()+" Date:"+myDate.getDate())
console.log(" Day:"+myDate.getDay()+" Hours:"+myDate.getHours()+" Mintues:"+myDate.getMinutes()+" Seconds:"+myDate.getSeconds()+" MiliSeconds:"+myDate.getMilliseconds())
//use of setter function in js
let myDate1 = new Date(2026,0,17);
console.log("Before Set Functions:"+myDate1.toDateString())
myDate1.setFullYear(2003);
myDate1.setMonth(9);
myDate1.setDate(16);
console.log("After Set Functions:"+myDate1.toDateString())
myDate2=new Date(2026,0,17,10,34,23);
console.log("Before Use Set Hour"+myDate2.toTimeString())
myDate2.setHours(11);
myDate2.setMinutes(30);
myDate2.setSeconds(30);
console.log("After Use Set Hour"+myDate2.toLocaleString());

let myTimeStamp = Date.now();//gives times in milliseconds from 1970 to now
console.log(myTimeStamp);
let myDate3 = new myDate3();
myDate3.toLocaleString('default',{weekday:"long"})