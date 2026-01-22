//18/01/2026
const myArr = [0,1,2,3,4,5];
console.log("Array is:",myArr)
const myArr2=new Array(1,2,3,4,5)
console.log(myArr2[2])//accessing 3rd element
console.log("Length of Array is:",myArr2.length)//length of Array
//Array Methods
myArr2.push(6)//adds 6 at last
console.log(myArr2)
myArr2.pop()//removes last element
console.log(myArr2)
myArr2.unshift(9)//adds element at start
console.log(myArr2)
myArr2.shift()//removes first element
console.log(myArr2)
console.log(myArr2.includes(4))//checkes element is present or not  gives boolean value
console.log(myArr2.indexOf(3))//gives index of element
const newArr= myArr2.join()//joins all elements as string
console.log(newArr)
console.log(typeof newArr)//type is string
//slice / splice methods
const arrn1 = myArr.slice(1,4)// slices from index 1 to 3 but 4 is excluded
console.log("old Array: ",myArr,"a",arrn1)
console.log("before splice:",myArr2)
const arrn2 = myArr2.splice(1,3)//removes elements from index 1 to 3
console.log("after splice:",myArr2);
console.log("spliced Array:",arrn2) 
//
const marvel_heros =["thor", "Iroman", "SpiderMan"]
const dc_heros =["SuperMan", "Batman", "Flash"]
//marvel_heros.push(dc_heros)
//console.log(marvel_heros)//adds dc_heros Array as single element
//const all_heros=marvel_heros.concat(dc_heros)//merges two arrays
//console.log("All Heros:",all_heros)
//spread operator
const allHeros=[...marvel_heros,...dc_heros]//spread operator used to cut array 
// elements or variables values and create new array
console.log(allHeros)
//flat method
const anotherArr=[1,2,3,[4,5,6],7,[8,9,[10,11,[12,13]]]]
const usedFlatArr=anotherArr.flat(3)// flat multi dimensional array to single dimensional array
//here 3 is depth level to which it will be flattened 
//always use flat with depth level and we can also use infinity to flatten
console.log(usedFlatArr)
//Array convertion method
const str = "Pratik"

console.log(Array.isArray(str))// it checkes given argument is Array  or not
console.log(Array.from(101))//it convert argument to array
const n1 =101
const n2=102
const n3=103
console.log(Array.of(n1,n2,n3))//it creates array from given arguments
