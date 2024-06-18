// Topic :- Promsies 
// Call stack

// function xyz(){
//     console.log('inside xyz');
//     function temp(x){
//         console.log(x*x);
//     }
//     console.log('end');
//     temp(12);
// }
// console.log('start');
// xyz();

// // Asynchronous Call backs :- Which takes time

// const button = document.getElementsByTagName('button')[0];
// button.addEventListener('click', cb);

// function cb(){
//     console.log('Button clicked');
// }

// // Another examoke of asynchronous callback
// console.log('Start');
// const delay = 1000;
// const cb=()=>{
//     console.log('CB delay');
// }

// setTimeout(cb, delay); // setTimeout is an asynchronous function.

// console.log('end');

// Promises :-

// const request = fetch('https://dummyjson.com/products');
// request.then((result) => {
//     const convertPomiseIntoJson = result.json();
//     convertPomiseIntoJson.then((data) => {
//         console.log(data);
//     });
// })
//     .catch((error) => {
//         alert(error);
//     });


// ----------------------------------

const root = document.getElementById('root');
const searchInput = document.getElementById('searchBar');
let allProducts = [];


fetch('https://dummyjson.com/products')
    .then((result) => result.json())
    .then(data => {
        allProducts = data.products;
        renderUI(allProducts);
    })

    .catch((error) => {
        alert(error);
    });

const renderUI = (products) => {

    root.innerHTML = ''; // Clear previous content

    for (let i = 0; i < products.length; i++) {
        // root.append(`${products[i].title}\n`);
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
        <img src="${products[i].images[0]}" alt="Person" id="img">
        <h3>${products[i].title}</h3>
        <p>${products[i].price}</p>`;

        card.style.border = "3px solid grey";
        card.style.borderRadius = "20px";
        card.style.padding = "20px";
        card.style.margin = "20px";
        card.style.height = "300px";
        card.style.width = "300px";
        card.style.backgroundColor = "lightgrey";

        root.appendChild(card);
    }
};


searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const filteredProducts = allProducts.filter(product =>
        product.title.toLowerCase().includes(query)
    );
    renderUI(filteredProducts);
});

// function search(allProducts, e) {
//     const find = e.target.value;
//     for (let i = 0; i < allProducts.length; i++) {
//         if (find === allProducts[i].title) {
//             const ele = document.getElementsByClassName("product-card");
//             ele.innerHTML = `
//                 <img src="${allProducts[i].images}" alt="Person" id="img">
//                 <h3>${allProducts[i].title}</h3>
//                 <p>${allProducts[i].price}</p>`;
//         }
//     }
// }

// -------------------------------------
