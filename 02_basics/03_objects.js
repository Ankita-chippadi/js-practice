// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Ankita",
    "full name": "Ankita Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "ankita@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])


JsUser.email="ankita@amzon.com"
// Object.freeze(JsUser)

JsUser.email="ankita@gmail.com"
// console.log(JsUser)
//====================================================

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this["full name"]}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());