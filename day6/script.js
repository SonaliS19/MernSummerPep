// const s2 = document.getElementsByTagName('section');
// const secondSection = s2[1];
// const title = secondSection.getElementsByTagName('h4');
// title[0].innerText='Hello';
//  OR
// const title = document.getElementsByTagName('section')[1].getElementsByTagName('h4');
// title[0].innerText="JS Callbacks";

const title = document.querySelector('section h4');
title.style.color = "lightgreen";

title.className = 'cs1';
title.setAttribute('class', 'cs22');
title.setAttribute('name', 'Prejwal');

// Adding a new tag in HTML using JS
// Here adding p tag inside the section tag.
const p = document.createElement('p');
p.innerText = "New line from DOM."
const sec = document.getElementsByTagName('section')[0];
sec.appendChild(p);
// sec.appendChild("Hello world!");
sec.prepend("Hello world!");

// Events in JS :-
function printHello() {
    console.log("Hello");
}

function inputClicked(e) {
    console.log("inputClicked", e);
}
function inputKeydown(e) {
    console.log("inputKeydown", e);
    console.log(e.target.value);
}
function inputKeyup(e) {
    console.log("inputKeyup", e);
    console.log(e.target.value);
}
function inputChanged(e) {
    console.log("inputChanged", e);
}

function handleUserName(e){
    console.log("Name:", e.target.value);
}

function handleAge(e){
    console.log("Age:", e.target.value);
}

function handleSubmit(e){
    e.preventDefault();
    console.log("Submitted:", e.target);
    console.dir(e.target);
    console.dir(e.target[0].value);
    console.dir(e.target[1].value);

    const username = e.target[0].value;
    const userage = e.target[1].value;

    console.log(username, userage);

    if(userage>18){
        document.body.append("successful");
    }
    else{
        document.body.append("Not successful");
    }

    renderCard(username, userage);

    const form = document.getElementsByTagName('form')[0];
    form.style.display='none'; // This line make form unvisible. 
}

const renderCard = (n, a) => {
    const root = document.getElementById('root');

    root.setAttribute('class', 'card');

    root.innerHTML=`
    <h3 class = 'name'> Name is : ${n}</h3>
    <h3 class = 'Age'> Age is : ${a}</h3>`;
}

const showResult=(res)=>{
    console.log(res);
    const root = document.getElementById('root1');
    root.innerText=res;
}

const sum =(a, b)=>{
    const res =a+b;
    showResult(res);
}
const mul =(a, b)=>{
    const res =a*b;
    showResult(res);
}
// -----------------------------
const showRes=(res)=>{
    console.log(res);
    const root = document.getElementById('root1');
    root.innerText=res;
}

const showPretty=(res)=>{
    console.log(res);
    const root = document.getElementById('root1');
    root.style.color='green';
    root.innerText=res;
}

const su =(a, b)=>{
    const res =a+b;
    return res;
}


// showRes(sum(10, 20));
// const rr = sum(10, 20);
// showRes(rr);
showPretty(su(10, 20));

// -----------------------------

// const s =(a, b)=>{
//     const res =a+b;
//     fn(rrr);
// }

// const rrr= s(10, 20 , showPretty);

// ---------------------------
function payWithRazorPay(){
    console.log('Payment processing on RazorPay');
}
function payWithPayTM(){
    console.log('Payment processing on payTM');
}
const userDetails = (name, age, seat, processPayment)=>{
    console.log(
        `Booking for ${name} whose age is ${age}`
    );

    if(true){
        processPayment();
    }
    else{
        console.log('error');
    }
}

userDetails('Varinder', 32, 'SL', payWithPayTM);

// Predefined functions in JS ---------------------------------
// 1.) Array predefined functions 
const arr = [10, 20, 30];
console.log(arr);

arr.shift();
console.log(arr);

arr.unshift('12');
console.log(arr);

arr.push('122');
console.log(arr);

arr.pop();
console.log(arr);

// Change in old array only and tospliced() create a new array
arr.splice('34');
console.log(arr);


// Array and callbacks ----------------------
const a = ['fruits', 'apple', 'orange'];
const printValues = (a, b, c)=>{
    console.log('Value is ', a)
    console.log('Index is ', b);
    console.log('Array is', c);
    console.log("************");
}
for(let i =0; i<arr.length; i++){
    printValues(a[i], i, a);
}

// OR

array.forEach(printValues);

// Custom forEach
function ForEach(a, fn){
    for(let i =0; i<a.length;i++){
        fn(arr[i], i, arr);
    }
}

ForEach(arr, printValues);

// Using forEach function get sum of array

const ar =[10, 20, 30, 40];
let summ=0;
ar.forEach((a)=>{
    summ = summ +a;
});
console.log(sum);

// --------------------
const isEven=(x)=>{
    if(x%2==0){
        return true;
    }
    else{
        return false;
    }
}

const res =ar.filter(isEven);
console.log("res : ", res);

// OR

const resu =ar.filter((x)=>{
    if(x%2==0){
        return true;
    }
    else{
        return false;
    }
});

console.log("result : ", resu);

