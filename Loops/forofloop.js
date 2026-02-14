//this loop is arrays speccific loop in java script 
const arr = [1,2,3,4,5]
for(const num of arr){
    //console.log(num);
}

//Maps 
/*
map is a collection of key value pair and it maintain the order of insertion
and it can have any type of key and value and it is iterable. it have methods like set,get,has,delete,clear and size property
*/
 const map = new Map()
 map.set('IN',"India")
 map.set('US',"united states ")
 map.set('FR',"France")
map.set('IN',"India")
//console.log(map)


for(const [key,value] of map){ // here we can write like const key of map
console.log(key,':',value)


}
// we cannot use  for of loop with objects because object are not iterable