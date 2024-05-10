// let myName="Ankita";
// console.log(myName.trim().length)


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.Ankita = function(){
    console.log(`Ankita is present in all objects`);
}
Object.prototype.HeyAnki = function(){
    console.log(` Hii Ankita `);
}
// heroPower.Ankita ()
// myHeros.Ankita()
// myHeros.HeyAnki()
// heroPower.HeyAnki()

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher={
    makeVedio:true,

}
const TeachingSupport ={
    isAvailable:true

}
const TASuuport={
    makeAssignment:"JS practice",
    fullTime:true,
    __proto__: TeachingSupport
}
Teacher.__proto__ = User

//modern Syntax
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername=" ChaiAurCode  "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Ankita".trueLength()
"iceTea".trueLength()