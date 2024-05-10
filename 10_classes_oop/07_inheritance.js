class User{
    constructor(userName){
        this.userName=userName;
    }
    logMe(){
        console.log(`User name: ${this.userName}`);
    }
}
class Teacher extends User{
    constructor(userName,email,password){
        super(userName);

        this.email=email;
        this.password=password;
    }
    addCourse(){
        console.log(`A new course was added by ${this.userName}`);
    }
}

const t1=new Teacher("Ankita","anki@gmail.com","123")
t1.addCourse();
// t1.logMe()

const user1= new User("Ankita")
user1.logMe();

console.log(user1===t1)
console.log(user1 instanceof User)

