//singleton :- creates object using constructor
//object literals
const mysym= Symbol("Key1") 
const JsUser={
    name:"Pratik",
    "City":"pune",
    [mysym]:"mykey1", //only using this way we can write symbol datatype in objects
    Age:18,
    location:"Pune",
    isLoggedIn:false,
    lastLoginDays:["Mon","Fri"]
}
//object accessing
console.log(JsUser.name)
//console.log(JsUser."City")//gives error
console.log(JsUser["name"])
console.log(JsUser["City"]) // using this we can also access String key
console.log([mysym])//only using this way we can access symbol key
JsUser.Age=19 //modifying object property
//Object.freeze(JsUser)// it will not allow to modifying object
JsUser.Age=20// it will be ignored
console.log(JsUser.Age) //19
JsUser.greeting = function(){
    console.log("Hello user"); 
}// add method to object
console.log(JsUser.greeting())//calling method
JsUser.greeting2 = function(){
    console.log(`Hello ${this.name}`) 
}// using this keyword to access current Object properties
 console.log(JsUser.greeting2())
