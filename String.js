const name="Pratik";
const repoCount=50;
console.log(name +" "+ repoCount+" Value")//concatenation //old way
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)//templete String (ES6 feature)
const gameName=new String("chess");//String object
console.log(typeof gameName)//object
console.log(gameName[0])//c
console.log(gameName.length)//5
console.log(gameName.toUppercase)//CHESS 
console.log(gameName.charAt(2))//e
console.log(gameName.indexOf('s'))//2//this method gives occurrence of matching charecter from starting index
const newString =gameName.substring(0,4)//ches
//it will not uses negative index,if we use negative index it will consider as 0
console.log(newString)//ches
const anotherString=gameName.slice(0,4)//this is same as substring but it will use negative index also and gives answer excluding last index
console.log(anotherString)