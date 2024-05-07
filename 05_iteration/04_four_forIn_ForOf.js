const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
//   console.log(`${key} shotrt cut of ${myObject[key]}`);
    
}

const programming=['js',"java","cpp","ruby"]
for (const key in programming) {
//    console.log(programming[key]);
}

const map1 = new Map()
map1.set('IN',"India")
map1.set('FR',"France")
map1.set('USA',"United state of america")

for (const key in map1) {
   console.log(key);
}