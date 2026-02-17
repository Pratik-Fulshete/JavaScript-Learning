/*it is high order function in js. it accept call back function , using  this we can 
perform opertion on each  element of array in js. we can also pass function as parameter to for each
it is not return any value*/
//call back function syntax function (){} , () =>{}
const coding=['js', 'ruby', 'java', 'python','cpp']
//coding.forEach(function (lang) {console.log (`first way of callback function :${lang}`)})
//coding.forEach((code)=>{console.log(`second way of callback using coarrow:${code}`)})
function printMe(lang){
console.log("Using print me function:",lang)
}

//coding.forEach(printMe)

//it can also accept value, index , full array

coding.forEach((value, index, arr)=>{
   // console.log(value, index, arr)
})

//IMP 
const objectArr=[{
    name:'john',
    sirname:'Deo' //obj 1
},
{
    name:'Pair',
    sirname:'Duo' //obj 2
},
{
    name:'can',
    sirname:'og' //obj 1
}]

objectArr.forEach((obj)=>{ //here obj refers to each object in array
    console.log("object key:",obj.name, "object value:",obj.sirname) // accessing each object  form array
})// it is useful with api and db data and where we get array of objects and we want to perform operation on each object in array

//foreach can't return values