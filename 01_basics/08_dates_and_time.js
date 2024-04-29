//DATE
let date=new Date()
// console.log(date);
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toLocaleString());
// console.log(typeof date);


// let myCreatedDate= new Date(2024,3,28)
// let myCreatedDate= new Date(2024,3,28,5,3)
// let myCreatedDate= new Date("2024-04-28")
let myCreatedDate= new Date("04-28-2024")
// console.log(myCreatedDate.toLocaleString());
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getTimezoneOffset());


let myTimeStamp=Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/100));



let newDate=new Date()
// console.log(newDate);
// console.log(newDate.getDate()+1);
// console.log(newDate.getDay());

// `${newDate.getDate()} AND tIME`

newDate.toLocaleString('default',{
    weekday:"long"
})
console.log(newDate);
