const myObject = {
    js :'javascript',
    cpp :'c++',
    rb  : 'ruby'
}

for(let key in myObject){ //for in Loop
    console.log(`${key} shortcut is for ${myObject[key]}`) //use objectname[key] for print values
}

const arr = ['java','c++','.Net','python']
 
 for(let ele in arr){ // here only print in built key for array elements
    //console.log(ele)
 }
  
for(let ele in arr){
    //console.log(ele,":",arr[ele]) // if we want only value  then use syntax like arr[ele]
}
const map = new Map() //not working with map
 map.set('IN',"India")
 map.set('US',"united states ")
 map.set('FR',"France")
map.set('IN',"India")
//console.log(map)
for (const key in map){
 console.log(key);
}