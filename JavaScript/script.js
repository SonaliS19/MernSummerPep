console.log("working")

//decleration
// var age;
//assingment/initialization
// age=19;
// console.log(age);
//re-assingment
// age= 20;
// console.log(age);

// function abc(){
//   var username="Sonali";
//   console.log(username);
// }

// let username = "ABC"
// console.log(username);

// username ="XYZ"
// console.log(username);


//CONCATINATION--------------------------------------------------------------------------------

// let fname = "Sonali"
// let lname = "Singh"

// let fullname = fname + lname
// console.log(fullname)
// console.log(typeof(fullname))

// let v1 = 'hello';
// let v2 = 'hello';
// //checks for the equality of values, can do the coercion
// if(v1==v2){
//   console.log("yes")
// }
// else{
//   console.log("No")
// }

// //Strict checking, for premative: Value and dataType, for non-premative:
// if(v1===v2){
//   console.log("yes")
// }
// else{
//   console.log("No")
// }


// let n1 = '10';
// let n2 = 10;

// //checks for the equality of values, can do the coercion
// if(n1==n2){
//   console.log("yes")
// }
// else{
//   console.log("No")
// }

// //Strict checking, for premative: Value and dataType, for non-premative:
// if(n1===n2){
//   console.log("yes")
// }
// else{
//   console.log("No")
// }


// //TEMPLATE LITERALS ------------------------------------------------------------------------------------

// let s1 = 'Hello';
// let s2 = 10;

// console.log(`${s1} ${s2}`)

//FUNCTION IN JS--------------------------------------------------------------------------------------------
// function printHello(){
//   console.log('Hello')
// }

// function HelloAjay(x){
//   console.log('Hello '+ x)
// }

// HelloAjay("Abhi")

// const pH= function HelloAjay(x){
//   console.log('Hello '+ x)
// }

// pH("Abhi")

// //Ananomus function 
// const pHa= function(x){
//   console.log('Hello '+ x)
// }

// pHa("Abhi")


//Arrow fuction()--------
// const pHar=(x)=>{
//   console.log('Hello '+ x)
// }

// pHar("Abhi")


// const Product=(a,b)=>{
//   const ans = a*b;
//   console.log(ans)
// }

// Product(10,20)


// function sum(a,b){
//   const ans = a+b;
//   console.log(ans)
// }

// sum(10,20)


//LOOPS--------------------------------------------------------------------------------------------------------------------------
const arr =[
  "apple","banana","mango","orange"
]
for(let i =0; i<4; i++){
  console.log(i);
}

//it will print the keys of key value paired
for(let i in arr){
  console.log(i)
}
//can be use only in arrays
for(let i of arr){
  console.log(i)
}

//CONDITIONAL STATEMENTS IN JS-------------------------------------------------
// //make a fun called sum
// sum()->0
// sum(10):->10
// sum(10,20)->30


// const calSum = (a,b)=>{
  
//   if(a===undefined){
//     console.log(0);
//   }
//   else if(b !==undefined){
//     console.log(a+b);
//   }
//   else{
//      console.log(a);
//   }
// }
// calSum()
// calSum(10)
// calSum(10,20)

//ANOTHER METHOD
// function sum(a=0,b=0){
//   const sum = a+b;
//   console.log(sum)
// }
// sum()
// sum(10)
// sum(10,20)


//OBJECTS IN JS------------------------------------------------------------------------------

// const obj1 = new Object();
// const obj2 ={};
// obj1.fname = 'Sonali'
// obj2.lname = 'Singh'
// console.log(obj1);
// console.log(obj2);

// const obj ={
//   name:"Ajay",
//   "age":30,
//   10: "ten",
//   "city":"jaipur",
//   "ten":10,
//   20:200
// }

// console.log(obj);
// console.log(obj.name);
// console.log(obj[20]);

// // const input =prompt();
// const input =prompt();
// console.log(obj[input]);


// //Shawol copy(only valued for primative DT , it is mutable)-------------------------------------------------

// const o1={
//   name: 'RAj',
//   age:30,
// }
// const o2=o1;
// o2.name='JAR'
// console.log(o1)
// console.log(o2)




//ARRAYS IN JS-----------------------------------------------------------------------------

// const arr=["one", "two", 100]
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[2]);
// console.log(arr.length);


