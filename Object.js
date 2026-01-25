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
//singleton using constructor

//const tinderUser = new Object() // creating object using constructor
const tinderUser={}
//add properties to object
tinderUser.id="1234"
tinderUser.name = "Pranit"
tinderUser.isLoggedIn = false
//console.log(tinderUser)

const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"malti",
            lastname:"chahar"
        }
    }
}
/*console.log(regularUser.fullname)
console.log(regularUser.fullname.userfullname.firstname)// accessing nested object
console.log(regularUser?.fullname?.userfullname)// using optional chaining*/
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3 = Object.assign({}, obj1, obj2)// merging multiple objects 
//there are first parameter is target object and another are source objects
//console.log(obj3)
//merging using spread operator

const obj4 = {...obj1,...obj2}
//console.log( obj4)

const users= [
    {userId:1, userName:"pratik"},
    {userId:2, userName:"abc"},
    {userId:3, userName:"xyz"}

]// array of  objects
console.log(users[1].userName) //accessing object inside array

//methods on objects
console.log(Object.keys(tinderUser)) //it will gives array of keys
console.log(Object.values(tinderUser))// it will gives array of values
console.log(Object.entries(tinderUser))//it will gives array of [key, value] pairs means entries
console.log(tinderUser.hasOwnProperty("name"))//it checks whether given key is present or not in object , it will gives answer in boolean (true/false).