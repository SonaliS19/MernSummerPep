//FS MODULE --------------------------------------------------------------------------------

const fs = require('fs');

// //write the data in new file or existing file
// fs.writeFileSync("file.txt" ,"this is the data inside the file")

// //Read the data inside the file
// //Synchronous FS / Blocking the flow of the code is the problem
// const data = fs.readFileSync("file.txt","utf-8")
// console.log(data);

// //toString method [another method to solve buffer printing problem]
// const data2 = fs.readFileSync("file.txt")
// console.log(data2.toString());

// //Append the data
// fs.appendFileSync("file.txt", "new data is added")
// const newData= fs.readFileSync("file.txt","utf-8")
// console.log(newData)



////Asynchronous FS/callback and promises required

// const doc = fs.readFile('file.txt','utf-8',(err,data) =>{
//   if(err){
//     console.log("error occured",err)
//   }
//   else{
//     console.log("reading the file");
//     console.log(data);

//   }


// })

//Asynchronous write

// fs.writeFile("file2.txt", "2nd node file", (err,data)=>{
//   console.log("start")
//     if(err){
//       console.log(err)

//     }
//     else{
//       console.log(data)  //undefined?
//     }

//     console.log("end")
// })
// console.log("finished")


//PROMISES[then, catch]----------------------------------------------------------------------

// const fsPromises = require("fs/promises")

// console.log("start")
// fsPromises.readFile("file.txt","utf-8")
// .then((data)=>{
//   console.log(data)
// }).catch(err=>{
//   console.log("Error",err)
// })
// console.log("end")


// fsPromises.writeFile("file2.txt","data is written")
// .then((data)=>{
//   console.log("write operation done")
// }).catch((err)=>{
//   console.log(err)
// })

// fsPromises.appendFile("file2.txt","new data added")
// .then((data)=>{
//   console.log(data)  //undefined
// })
// .catch((err)=>{
//   console.log(err)
// })



//TASK: read a json file and  extract the total of maths scrore of all the student--------------------------------------------------

const fsPromises = require("fs/promises")

const pr = fsPromises.readFile("data.json","utf-8")

//Writting fun for finding specific data
const getObjectById=(id,arr)=>{
  const result = arr.find((elem)=>{
    if(elem.id==id)
      return true
    else
      return false
  })

  // const result = arr.filter((elem)=>{
  //   if(elem.id==id)
  //     return true
  //   else
  //     return false
  // })

  return result
 
}

pr.then((data)=>{
  const arr = JSON.parse(data)
  const obj = getObjectById(3,arr)
  console.log(obj)
})

// pr.then((data)=>{
//   console.log(data);
//   console.log("printing parse form")
//   const arr = JSON.parse(data)
//   console.log(arr)

//   let mt = 0;
//   let st = 0;
//   for(let i=0; i<arr.length;i++){
//     mt += arr[i].MathsScore;
//     st += arr[i].ScienceScore;
//   }
//   console.log("sum of all mathsScore is ", mt)
//   console.log("sum of all ScienceScore is ", st)

// })

// //for printing the object at id = 3 using for loop
// pr.then((data)=>{
//   const arr = JSON.parse(data);
//   for(let j=0; j<arr.length; j++){
//     if(arr[j].id==3){
//       console.log(arr[j])
//     }
//   }
// })

.catch((err)=>{
  console.log(err)
})