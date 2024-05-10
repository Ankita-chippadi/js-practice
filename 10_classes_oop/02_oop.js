const user={
    userName:'Ankita',
    loginCount: 8,
    signedIn:true, 

    getUserDetails:function(){
    //     console.log('Got user details from database');
    //     console.log(`userName:${this.userName}`)
        console.log(this)
    }
}

// console.log(user.userName);
// console.log(user.getUserDetails())
// console.log(this)

function User(userName,loginCount,isLoggedIn){
    this.userName =userName;
    this.loginCount-loginCount;
    this.isLoggedIn=isLoggedIn;

    this.greetings=function(){
        console.log(`welcome : ${this.userName}`);
    }
    return this //; -> Implicitly define if you didnt write this line still it will execute
}

const userOne=new User("Abkita",10,true);
const userTwo=new User("chaiAurCode",11,false)
console.log(userOne);
console.log(userTwo);
console.log(userOne.constructor);