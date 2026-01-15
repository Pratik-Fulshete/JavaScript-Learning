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
