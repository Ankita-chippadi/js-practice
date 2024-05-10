// class User{
//     constructor(userName,email,password){
//         this.userName=userName;
//         this.email=email;
//         this.password=password;
//     }

//     encrptPassword(){
//         return `${this.password}abd`
//     }

//     ChangeUserName(){
//         return `${this.userName.toUpperCase()}`
//     }
// }

// const chai=new User("chai","chai@gmail,com","123");

// console.log(chai.encrptPassword())
// console.log(chai.ChangeUserName())

//Behind the scene 

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());