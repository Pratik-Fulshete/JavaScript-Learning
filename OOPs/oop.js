//object literels
const user ={
    username: "hitesh",
    loginCount : 8,
    signedIn : true ,
    getUserDetails: function(){
        //console.log(`user name: ${this.username}`)
        console.log(this) //it prints current whole object 
    }
}

//console.log(user.username);
//console.log(user.getUserDetails())

//constructor function

function User(userName,loginCount,isLoggedIn){
    this.userName = userName
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn
    this.greeting = function (){
        console.log(`Welcome ${this.userName}`)
    }
    return this; //not need to write (implicitly adds)

    }
    const userOne = new User("Pratik",12,true)
    const userTwo = new User ("Rohit",10, false)
    console.log(userOne.constructor);
    //console.log(userTwo)