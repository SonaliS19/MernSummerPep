// const sum = function calsum(){
//   let sum = 0;

//   for(let i = 0; i < arguments.length; i++){
//     sum += arguments[i];
//     }
//     return sum;
// }
// console.log(sum(1,2,3,4,5)); 



// function sum(a=0,b=0){
//   return a+b;
// }
// const res = sum(9,5);
// console.log(res); //output: 14


// function product(a=0,b=0){
//   return a*b;
// }
// const res2 = product(9,5);
// console.log(res2); //output: 14


//sINGLE VALUE EXPORT
// module.exports = sum;

// //ARRAY STRUCT EXPORT
// module.exports = [sum,product];


//OBJECT STRUCT EXPORT
// module.exports = {sum,product};



//TASK----

function calc(s, ...arr){
  let ans = 0;
  if(s=='sum'){
    ans = arr.reduce((acc,elem)=>acc+elem);

  }
  else{
    ans=arr.reduce((acc,elem)=>acc*elem);

  }
  return ans;
}

const a1 = calc('sum', 10, 20,30)

//--------------------------------------------------------------------------------------------------------------------------

// const figlet = require("figlet");

// figlet("Sonali",(err,data)=>{
//   if(err)
//     {
//       console.log(err)
//     }
//   else{
//     console.log(data)
//   }
// })



