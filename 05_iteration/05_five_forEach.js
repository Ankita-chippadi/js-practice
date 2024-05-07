const coding = ["js", "ruby", "java", "python", "cpp"];


//call back functuon does not have name
// coding.forEach( function (val){
//     console.log(val);

// })

// function printme(item){
//     console.log(item);
// }
// coding.forEach(printme)

   coding.forEach( (item, index, arr)=> {
        // console.log(item, index, arr);
    } )
    

    const myCoding=[
        {
            language:"javaScript",
            fileName:"js"
        },
        {
            language:"Java",
            fileName:"java"
        },
        {
            language:"Python",
            fileName:"py"
        },
    ]
    myCoding.forEach((item)=>{
        console.log(item.fileName);

    })