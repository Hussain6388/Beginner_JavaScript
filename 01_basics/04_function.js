let a = function(fun){
   fun("esrail");
}
// a(function(name){
//     console.log("my name is : ",name);
// });


let fat = (a=0,b=7)=>{
    return a*b;
}

function totalSum(...val){
    let sum = 0;
    val.forEach(element => {
        sum = element+sum;
    });
    console.log(sum);
}

// totalSum(1,2,3,4,5,6,7,8,9,5);
