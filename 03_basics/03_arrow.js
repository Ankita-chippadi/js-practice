const user={
    username:"Ankita",
    price:999 ,

    welComeMessage:function(){
        console.log(`${this.username},welcome to website`);
        // console.log(this);
    }
}
// user.welComeMessage()
// user.username="sam"
// user.welComeMessage()

// console.log(this);

// function chai(){
//     let userName="ankita"
    // console.log(this.userName);
// }
// chai()

// const chai=function chai(){
//         let userName="ankita"
//          console.log(this.userName);
//     }
    // chai()
    
// const chai=()=>{
//     let userName="ankita"
//      console.log(this);
// }
// chai()
//implicit return
// const addTwo=(num1,num2)=>num1+num2

// console.log(addTwo(3,4))

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()