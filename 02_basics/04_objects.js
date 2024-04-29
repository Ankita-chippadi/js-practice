//It is a singleton object 
// const tinderUser = new Object()

//Non singleton object
const tinderUser={}

tinderUser.id="123abc"
tinderUser.name="sam"
tinderUser.isLoggedIn=false


// console.log(tinderUser);

const regularUser={
    name:"ankita",
    email:"ankita@gmail.com",
    fullName:{
        userFullName:{
            firstname:"Ankita",
            lastName:"c"

        }

    }
   
}
// console.log(regularUser.fullName.userFullName.firstname)

const obj1={1:"a",2:"b",3:"c"}
const obj2={4:"d",5:"e"}
 
//object under the object will declar
// const obj3={obj1,obj2}

// const obj3=Object.assign({},obj1,obj2)

//spread object
// const obj3={...obj1, ...obj2}

// console.log(obj3)
//When the value comes from the Database

const User=[
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    }
]
// User[1].email

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]