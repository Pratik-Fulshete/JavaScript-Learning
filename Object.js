//singleton :- creates object using constructor
//object literals 
const JsUser={
    name:"Pratik",
    "City":"pune",
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