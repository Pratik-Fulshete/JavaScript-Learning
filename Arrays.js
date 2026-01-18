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
const arrn1 = myArr.slice(1,3)// slices from index 1 to 3 but 4 is excluded
console.log("old Array: ",myArr,"a",arrn1)
console.log("before splice:",myArr2)
const arrn2 = myArr2.splice(1,3)//removes elements from index 1 to 3
console.log("after splice:",myArr2);
console.log("spliced Array:",arrn2) 