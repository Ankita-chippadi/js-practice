//pending, fullfilled, and reject These 3 are state
//object representing enventual completion

// const promiseOne = new Promise(function(resolve,reject){
//     //Do an Async task
//     //DB connect, Cryptography,network
// setTimeout(function(){
//     console.log('async task complete')
//     resolve()
// },1000)
    
// })
// promiseOne.then(function(){
//     console.log('promise consumed');
// })

// --------------------*******************----------------------------
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('async task 2');
//         resolve()

//     },1000)
// }).then(function(){
//     console.log('async task resolved');
// })

// --------------------*******************----------------------------

// const promiseThree =new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('DB connected')
//         resolve({userName :'chai',email:'chai@gmail.com'})
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })

// --------------------*******************----------------------------

// const promiseFour= new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error= true;
//         if(!error){
//             resolve({userName:'Ankita',password:'Ankita@123'})
//         }else{
//             reject('ERROR: Something went wrong ')
//         }

//     },1000)
// })
// promiseFour.then((user)=>{
//     console.log(user);
//     return user.userName

// }).then((userName)=>{
//     console.log(userName);

// }).catch(function(err){
//     console.log(err);
// }).finally(function(){
//     console.log("Finally block executed succesfully  ::: The promise is either resolved or rejected")
// })


// --------------------*******************----------------------------
// const promiseFive= new Promise(function(resolve,reject){
//     console.log(" promise example  five");
//     setTimeout(function(){
//         let error=false;
//         if (!error) {
//             resolve({username: "javascript", password: "123"})
//         } else {
//             reject('ERROR: JS went wrong')
//         }
//     },1000)
// });
// async function consumePromiseFive(){
//     try{
//         const response= await promiseFive
//         console.log(response);
//     }catch(error){

//         console.log(error);
//     }
// }
// consumePromiseFive()


// --------------------*******************----------------------------
// async function getAllUser(){
   
//     try{
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')
//      const data= await response.json()
//       console.log(data);
//     }catch(error){
//         console.log('E:error');
//     }
// }
// getAllUser()

// --------------------*******************----------------------------

fetch('https://api.github.com/users/Ankita-chippadi')
.then((response)=>{
    return response.json()

})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{console.log(error);})

// promise.all
// yes this is also available,

//process of fetching the resources ->fetch()

//onfullfiled[]-> if you get 404 error then itll there here only
//onRejction[]
//response=fetch('something')