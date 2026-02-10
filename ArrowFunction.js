//this keyword
const user ={
    username:"pratik",
    price:1000,
    welcomeMessage:function(){
        console.log(`welcome ${this.username} to our website`); //here this keyword is used refers current object
        console.log(this) //here print whole user object 
    }
}
user.welcomeMessage()//print welcome pratik to our website
//user.username = "Shiv"
//user.welcomeMessage()//print welcome Shiv to our website
console.log(this) //  in browser it refers global windows object print all windows property like events
                  // in node js enviroment it refer global object but print {}

//arrow function
 function chai(){
    const username="PF"
    console.log(this)//here this keyword refers global object in normal function and print all function context information
    console.log(this.username) //it will not work in function gives answer undefined
 }
 //chai()
  const chai1 =() =>{
    let username = "PF"
    console.log(this.username);//undefined
  }

  //chai1()

const addTwo =(num1,num2)=>(num1 + num2) //if we write {} write return keyword 
console.log(addTwo(3,4))
const objArrow=()=>({username:"pratik"})
console.log(objArrow())
