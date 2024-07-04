// const api = 'https://jsonplaceholder.typicode.com/posts'

// fetch(api)
//   .then(response=>{
//     if(!response){
//       throw error
//     }
//     return response.json();
//   })
//   .then(data=>{
//     // console.log(data)
//     const filterD = data.map(post=>({
//       title:post.title,
//       body: post.body
//     }))
//     console.log(filterD);
//   }).catch(error=>{
//     console.log(error)
//   })

// const s="hello world";
// const hello = s.substring(0,5);
// console.log(hello);

// const n =10.5
// const intNum = parseInt(n);
// console.log(intNum);


// const arr = [10,20,30,40];

// const num = arr.reduce((accu,a,b,c)=>{
// 		cosole.log(acc,a,b,c);
// return acc+a;},0);
// cosole.log(n);







//--------------------------------------------------------------------------------------------

// //NORMAL FUN
// const sum = function abc(a,b){
//   return a+b;
// }
// console.log(sum(10,20));

// //ARROW FUNCTION
// const mul = (a,b)=>{
//   return a*b
// }
// console.log(mul(10,20))

// //SHORT HAND FUN
// const mul1 = (a,b)=>a/b;
// console.log(mul1(10,20));



// const arr =[1,2,3];
// arr.map(console.log);






// //FLAT ARRAY
// let input = [11,[22],33,[[44,55]]]
// const doFlat =(arr)=>{
//   let res = [];
//   arr.forEach((elem)=>{
//     if(Array.isArray(elem)){
//       const tempArr = doFlat(elem);
//       res = [...res,...tempArr]
//   }
//   else{
//     res.push(elem)
//   }
// })
//  return res;

// }
// let output = doFlat(input)
// console.log(output);


//HOW TO DO DEEP COPY ans sallow copy OF ARRAY?

//DEEP COPY
const tv = {
  name: 'sony',
  price: 10000,
  tag: ["tv","sony"]
}

function deepcopy(input){
  if(typeof(input)=="object"){

  }
  else{

  }
}