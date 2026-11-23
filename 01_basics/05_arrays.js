let fruits = ['Apple','Banana'];
fruits[1] = 'kiwi';
// console.log(frutes);

fruits.splice(1,0,'mango','guavava','banana')
// console.log(fruits);
// fruits.sort();
// fruits.reverse();
// console.log(fruits);

// let nums = [1,3,4,5,6];
// let idx = 0;
// let newNums = nums.map(function(val){
//     nums[idx]= val*val;
//     idx++;
//     return 0;
// });
// // console.log(newNums);
// console.log(nums);

// let nums = [11,3,4,5,16];

// let newNums = nums.filter(function(val){
//     return val>10;
// });
// // console.log(newNums);
// console.log(newNums);

let nums = [11,3,4,5,16];

let newNums = nums.reduce(function(prev,val){
    return prev+val;
},0);
// console.log(newNums);
console.log(newNums);

