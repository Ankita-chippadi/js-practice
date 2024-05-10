function setUserName(userName){
    this.userName=userName;
    console.log('called')
}

function createUser(userName,email,passowrd){
    setUserName.call(this,userName)


    this.email=email;
    this.passowrd=passowrd;
}

const chai=new createUser("chai","chai@gmail.com","chai@123")
console.log(chai)