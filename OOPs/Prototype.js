let MyName = "Pratik";
console.log(MyName.length);
let MyHeros=["Thor","SpiderMan"]
let heropower={
    thor:"hammer",
    SpiderMan:"sling",
    getSpiderPower:function(){
        console.log(`SpiderMan power is ${this.SpiderMan}`);
    }
}
        Object.prototype.Pratik = function(){
            console.log("Pratik present in all objects")
        }
       // heropower.Pratik()
       //MyHeros.Pratik()
        //it is accessable because we injects this pratik function using 
        //prototype to parents of all object using Object thats why.

 Array.prototype.heyPratik = function(){
    console.log("Hii Pratik")
 }
 MyHeros.heyPratik()
  //accessable because heyPratik() injects to Parent of all Array
  //heropower.heyPratik() //gives error
  //because of child to parents is not accessable 

  //inheritance

  const user ={
    name : "chaai",
    email : "chaai@google.com"
  }
  const Teacher ={
    makeVideo : true
  }

  const TeachingSupport ={
    isAvailable : false
  }

 const TASupport ={
    makeAssignment : 'js assignment',
    fullTime : true,
    __proto__:TeachingSupport // using this we can injects 1 object vaalues  to other object
 }                            // here TASupport can access TeachingSupport object properties

 Teacher.__proto__= user // here now Teacher can access user properties

 //console.log(Teacher.name)// its give output chaai because of __proto__  
  //above is old structure

  //mordern structure

  Object.setPrototypeOf(TeachingSupport,Teacher)
  //console.log(TeachingSupport.makeVideo)

  let UserName = "Pratik"
  String.prototype.trueLength= function(){
    console.log(`${this}`)
    console.log(`${this.length}`)
  }

  UserName.trueLength(); //now it is accessable for strings
  "Kamini".trueLength();
  "Jay".trueLength();

  //for above all example or concepts calls prototyple inheritance
