//Stack (Primitive), Heap (Non-Primitive)
let myname="Pratik";//Stack Area
let anothername=myname//Stack Area (copying value from myname to anothername)
console.log(myname);//Pratik
console.log(anothername);//Pratik
anothername="chaiaurcode"//this value is changed in stack area and add new memory address in stack
console.log(myname);//Pratik
console.log(anothername);//chaiaurcode

let userone= {
    email:"Pratikfulshete@gmail.com",
    upi:"pratik@oksbi"
}
let usertwo=userone;//copying Reference of user one to usertwo (both 
//are pointing to same memeory address in Heap area)but stack area both have different memeory address
usertwo.email="hitesh@gmail.com"//changing value of email in usertwo but 
//it will also reflect in userone because both are pointing to same Reference in heap area
//userone.email="pratik"
console.log(userone.email);//hitesh@gmail.com
console.log(usertwo.email);//hitesh@gmail.com
