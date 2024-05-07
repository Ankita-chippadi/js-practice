const myNumber=[1,2,3,4,5,6,7,8,9]
// const newNums=myNumber.map((num)=>{return num+10})
const newNums=[]
myNumber.forEach((num) => {
    newNums.push(num + 10);
});

console.log(newNums)

