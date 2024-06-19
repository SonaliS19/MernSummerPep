////Object DESTRUCTURING ---------------------------------------------------------------------------------

const student = {
  userName: "Aman",
  rollNo: 12,
  city: "Delhi",
};

// console.log(student.userName);
// console.log(student.rollNo);

////Destructuring(create the copy of original)
const { userName, city } = student;

// console.log(userName); // Aman
// console.log(student.city); // Delhi

////ARRAY DESTRUCTURING ---------------------------------------------------------------------------------
// const fruits = ["Banana", "Apple", "Mango"]

// console.log(fruits[0])
// const [, i2, i3] = fruits;
// console.log(i2); // Apple
// console.log(i3); // Mango

// const student2 = {
//   userName: 'Aman',
//   rollNo: 12,
//   city: "Delhi",
//  hobbies: ['Painting', 'Styling', 'Drawing']

// }

// const {hobbies}=student2;
// hobbies[0]="Studying";
// console.log(student2); // ["Studying", "Styling", "Drawing"]
// console.log(hobbies)

/* 
rest:- to back the values
spread:- to spread or unpack the values
*/

const s1 = {
  userName: "Aman",
  rollNo: 12,
  city: "Delhi",
  hobbies: ["Painting", "Styling", "Drawing"],
};

// const s2 = s1;
// s2.userName = "Rahul";
// console.log(s1); // { userName: 'Rahul', rollNo: 12,city: 'Delhi', hobbies: [ 'Painting', 'Styling', 'Drawing']}
// // console.log(s2);

// const s2 = {...s1};
// s2.userName = "Ajay";
// console.log(s1);
// console.log(s2);

// ------------------ sperad (unpack) using {...} ---------------
// Here the value of s3 will not change when changing s4
// Here addresses of premitives are different and of non-premitives are same. So the prmitives are not changed but non- premitives got changed.

// const s3 = {
//   userName: 'Aman',
//   rollno: '24001',
//   city: 'Delhi',
//   hobbies: ["Painting", "Styling", "Drawing"]
// }

// const s4 = { ...s3 };
// s4.userName = 'Ajay';
// s4.hobbies[1] = 'Typing';

// console.log(s3);
// console.log(s4);
// console.log(s3);

// -------------------- Rest (pack) -----------------------------------
// function sum([...a]) {
//     console.log(a);
// }

// sum();
// sum(10);
// sum(10, 20);
// sum(10, 20, 11);
// sum(1, 2, 10, 4);

// -----------------------------------------------------------------

//REDUCE FUNCTION, // Reduce(cb, initial value) is an array function :- Reduce a whole array to single

// function sum(...arr){
//   const res = arr.reduce((acc,elen, idx)=>{
//     console.log(acc,elen,idx);
//     return acc+elen;

//   },-1);
//   console.log('-->',res);

// }

// sum(10,20,11);

//ASYNC AWAIT FUN-----------------------------------------------

// console.log("Start");
// async function getData() {
//   console.log("Inside myFun");
//   const res = await fetch('https://dummyjson.com/products')
//   console.log("Step1")
//   const data = await res.json();
//   console.log("Step2")
//   console.log(data);
//   console.log("End of myFun");

// }
// getData();
// console.log('end')

const obj = {
  name: "Ajay",
  city: "Jaipur",
  age: 25,
  address: "lorem ipsum",
  arr: [1, 2, 3],
};

const s = { ...obj };
s.name = "Aman";
s.arr[0] = "hello";
console.log(obj);
console.log(s);
// rest --> packing
// spread --> unpacking

// console.log(obj.name);
// const { name, ...r } = obj;
// console.log(r);

// function sum(a, ...arr) {
//   console.log(arr);
// }

// sum();
// sum(1);
// sum(10, 20, 30);

const arr = [11, 21, 31, 41];

// const n = arr.map((a, b, c) => {
//   console.log(a, b, c);
//   return a * b;
// });

// console.log(n);

const n = arr.reduce((acc, a, b, c) => {
  console.log(acc, a, b, c);
  return acc + a;
}, 0);

console.log(n);
