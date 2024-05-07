//for of loop
// ["","",""]->Array in the string 
// [{},{},{}]->Array in the object


const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}
//oredre of insertion,
//it is object,its unique, and its stored in the key and value
const map1 = new Map()
map1.set('IN',"India")
map1.set('FR',"France")
map1.set('USA',"United state of america")

console.log(map1);

for(const [key,Value] of map1){
    console.log(key, ':-', Value);
}


//  myObject is not iterable getting error 
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);
    
}