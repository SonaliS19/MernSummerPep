//PROMISES 

// console.log('start')
// const pr = new Promise((resolve,reject)=>{
//   const flag = true;  //let's take true by defult
//   if(flag===true){
//     setTimeout(()=>{
//       resolve(["apple","mango"]);
//     },1000);
//   }
//     else{
//       reject("Promise is rejected");
//       }
// });

// console.log('mid')

// setTimeout(()=>{
//   console.log('done')
// },4000);


// pr.then(()=>{
//   console.log('+++');
// }).catch(err=>{
//   console.log(err);
// })

// console.log('end')




//--------------------------------------------------------------------
//SETTIMEOUT(once), SetInterval()

// const cb = ()=>{
//   console.log('callback function');
// };
// const time = 1000;
// setTimeout(cb,time);


// let cnt =0;
// let id;

// const cb = ()=>{
//   cnt++;
//   console.log('callback function',cnt);
//   if(cnt==4){
//     clearInterval(id);
//   }
// };
// const time = 1000;
// id=setInterval(cb,time);


//ARRAY FUNCTIONS-------------------------------------------------------------------
const arr =["A","B","C", "D"]
//FORECHA(DOES NOT RETURN ANYTHING) AND MAP(IT RETURNS)--------------------------------------------
const res1=arr.forEach((a,b,c)=>{
  console.log(a,b,c);
  return "foreach OK"
})

const res2=arr.map((element,b,c)=>{
  // console.log(a,b,c);
  return "map OK"
})

console.log(res1);
console.log(res2);

if(arr==res2){
  console.log("same array");
}
else{
  console.log("different array");
}


//FILTER(work on given condition: work for only true value)-------------------------------------------------------
const arr2 = ["A","BD","CD","D"]
const res3=arr2.filter((a,b,c)=>{  //a->element, b->index, c-> array
  // console.log(a,b,c);
  // return "filter OK"

  // if(a.length==1){
  //   return true;
  // }
  // else{
  //   return false;
  // }

  if(b%2==0){
    return true;
  }
  else{
    return false;
  }
})

console.log(res3);
