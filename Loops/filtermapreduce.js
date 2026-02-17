//filter
const myNums=[1,2,3,4,5]
const newNums = myNums.filter((num)=>num>4) //if here we use {} scope then use return keyword to return value
//console.log(newNums) //filter returns value

const Nums =[]
myNums.forEach((num)=>{
    if(num>4){
        Nums.push(num)
    }
})
//console.log(Nums);

/* filter filter the data or element using condition.*/

const books=[{title:'Bk1',genre:'ficition',publish:2000},
{title:'Bk2',genre:'non-ficition',publish:2021},
{title:'Bk3',genre:'Histroy',publish:1999},
{title:'Bk4',genre:'science',publish:2003},
{title:'Bk5',genre:'ficition',publish:2013},]

let userBooks =books.filter((bk)=>bk.genre === 'Histroy')
//console.log(userBooks)

userBooks = books.filter((bk)=>bk.publish<=2003 && bk.genre === 'science')
 //console.log(userBooks)

 //map

 const Numbers = [1,2,3,4,5,6,7,8,9,10]
 let nums = Numbers.map((num)=>num+10) //map iterate all element in array and perform operation on element
 //console.log(nums)

 // we can perform method chaining using map

const newNums2= Numbers.map((num)=>num*10)
                       .map((num)=>num+1)
                       .filter((num)=>num>=40)
//console.log(newNums2)

//reduce
//real time we use for shopping cart
const Numarr =[1,2,3]
let intial = 0;
let total=Numarr.reduce(function(acc,currval){
   // console.log(`accumlater: ${acc} and current value:${currval}`);
    return acc + currval
},intial)

//console.log(total)

const courses =[{course:'java fullstack',price:1999},
{course:'data analytics',price:2999},
{course:'UI Development',price:499}]
/*Into reduce method we give one intial value , that intial value use accumlater first time
after that accumlater use performed operations answer value to next iteration*/
let totalP=courses.reduce((acc,course)=>acc+course.price,0)
console.log(totalP)
