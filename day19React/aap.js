// import ReactDOM from "react-dom/client"
// //importing css file
// import "./globalStyles.css"



// import HomePage from "./src/Pages/homePage";
// import SearchPage from "./src/Pages/searchPage"
// import Revision from "./src/components/revision";


// const parent = document.getElementById("root");
// //we have a reactRom now which is connected to the parent
// const root = ReactDOM.createRoot(parent);




// // //Array of categories for dynamic appearance

// const categories =[
//   "Fresh",
//   "Fruits",
//   "Vegetables",
//   "Meat",
//   "Dairy",
//   "Bakery",
//   "Frozen",
//   "Snacks",
//   "Drinks",
//   "Personal Care",
//   "Baby Care",
//   "Pet Care",

//   ]


// const ProductInfoCards = [
//     {
//        id: 1,
//     title: "Revamp",
//     products:[
//       {
//       title: "toy",
//       img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_furnishings_2._SY116_CB555624324_.jpg"
//     },
//     {
//       title: "cloths",
//       img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_decor_1._SY116_CB555624324_.jpg"
//     },
//     {
//       title: "cloths",
//       img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_storage_1._SY116_CB555624324_.jpg"
//     },
//     {
//       title: "cloths",
//       img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_lighting_2._SY116_CB555624324_.jpg"
//     },
//   ]

// },
// {
//   id: 2,
//   title: "Revamp",
//   products: [
//       {
//           title: "Air Conditioners",
//           img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-372x232----B08RDL6H79._SY232_CB667322346_.jpg",
//       },
//       {
//           title: "Refrigerators",
//           img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B08345R1ZW---372x232._SY232_CB667322346_.jpg",
//       },
//       {
//           title: "Microwaves",
//           img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B07G5J5FYP._SY232_CB667322346_.jpg",
//       },
//       {
//           title: "Washing Machines",
//           img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08CPQVLZT._SY232_CB667322346_.jpg",
//       },
//   ],
// },
// {
//   id: 3,
//   title: "Revamp",
//   products: [
//       {
//           title: "Air Conditioners",
//           img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-372x232----B08RDL6H79._SY232_CB667322346_.jpg",
//       },
//       {
//           title: "Refrigerators",
//           img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B08345R1ZW---372x232._SY232_CB667322346_.jpg",
//       },
//       {
//           title: "Microwaves",
//           img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B07G5J5FYP._SY232_CB667322346_.jpg",
//       },
//       {
//           title: "Washing Machines",
//           img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08CPQVLZT._SY232_CB667322346_.jpg",
//       },
//   ],
// },
// {
//   id: 4,
//   title: "Revamp",
//   products: [
//       {
//           title: "Air Conditioners",
//           img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-372x232----B08RDL6H79._SY232_CB667322346_.jpg",
//       },
//       {
//           title: "Refrigerators",
//           img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B08345R1ZW---372x232._SY232_CB667322346_.jpg",
//       },
//       {
//           title: "Microwaves",
//           img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B07G5J5FYP._SY232_CB667322346_.jpg",
//       },
//       {
//           title: "Washing Machines",
//           img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08CPQVLZT._SY232_CB667322346_.jpg",
//       },
//   ],
// },

   
//   ];


// // //component of react(have a fun)
// const app = ()=>{
//   return (
//     <div>  
   
//     {/* <HomePage/> */}
//     {/* <SearchPage categories={categories}/> */}

//     <Revision></Revision>
//     </div>
//   );
// }

// ////when we'll use react element then we need to call here for rendering
// // root.render(app(HomePage));

// root.render(app());






//5|07-----------------------------------------------------------------


// import ReactDOM from "react-dom/client";
// import "./globalStyles.css";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import HomePage from "./src/Pages/homePage";
// import SearchPage from "./src/pages/searchPage";
// import { useState } from "react";

// const parent = document.getElementById("root");
// const root = ReactDOM.createRoot(parent);

// const productInfoCards = [
//     {
//         id: 1,
//         title: "Revamp",
//         products: [
//             {
//                 title: "Air Conditioners",
//                 img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-372x232----B08RDL6H79._SY232_CB667322346_.jpg",
//             },
//             {
//                 title: "Refrigerators",
//                 img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B08345R1ZW---372x232._SY232_CB667322346_.jpg",
//             },
//             {
//                 title: "Microwaves",
//                 img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B07G5J5FYP._SY232_CB667322346_.jpg",
//             },
//             {
//                 title: "Washing Machines",
//                 img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08CPQVLZT._SY232_CB667322346_.jpg",
//             },
//         ],
//     },
//     {
//         id: 2,
//         title: "Revamp",
//         products: [
//             {
//                 title: "Air Conditioners",
//                 img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-372x232----B08RDL6H79._SY232_CB667322346_.jpg",
//             },
//             {
//                 title: "Refrigerators",
//                 img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B08345R1ZW---372x232._SY232_CB667322346_.jpg",
//             },
//             {
//                 title: "Microwaves",
//                 img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B07G5J5FYP._SY232_CB667322346_.jpg",
//             },
//             {
//                 title: "Washing Machines",
//                 img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08CPQVLZT._SY232_CB667322346_.jpg",
//             },
//         ],
//     },
//     {
//         id: 3,
//         title: "Revamp",
//         products: [
//             {
//                 title: "Air Conditioners",
//                 img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-372x232----B08RDL6H79._SY232_CB667322346_.jpg",
//             },
//             {
//                 title: "Refrigerators",
//                 img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B08345R1ZW---372x232._SY232_CB667322346_.jpg",
//             },
//             {
//                 title: "Microwaves",
//                 img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B07G5J5FYP._SY232_CB667322346_.jpg",
//             },
//             {
//                 title: "Washing Machines",
//                 img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08CPQVLZT._SY232_CB667322346_.jpg",
//             },
//         ],
//     },
//     {
//         id: 4,
//         title: "Revamp",
//         products: [
//             {
//                 title: "Air Conditioners",
//                 img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-372x232----B08RDL6H79._SY232_CB667322346_.jpg",
//             },
//             {
//                 title: "Refrigerators",
//                 img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B08345R1ZW---372x232._SY232_CB667322346_.jpg",
//             },
//             {
//                 title: "Microwaves",
//                 img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B07G5J5FYP._SY232_CB667322346_.jpg",
//             },
//             {
//                 title: "Washing Machines",
//                 img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08CPQVLZT._SY232_CB667322346_.jpg",
//             },
//         ],
//     },
// ];

// const categories = [
//     "Fresh",
//     "Amazon MiniTV",
//     "Sell",
//     "Best Sellers",
//     "Mobiles",
//     "Todays Deals",
//     "Prime",
//     "Fashion",
//     "Electronics",
// ];

// const App = () => {
//     const [searchText, setSearchText] = useState("");

//     const router = createBrowserRouter([
//         {
//             path: "/",
//             element: (
//                 <HomePage
//                     searchText={searchText}
//                     setSearchText={setSearchText}
//                     productInfoCards={productInfoCards}
//                     categories={categories}
//                 />
//             ),
//         },
//         {
//             path: "/search",
//             element: <SearchPage searchText={searchText} setSearchText={setSearchText} categories={categories} />,
//         },
//     ]);
//     return <RouterProvider router={router} />;
// };

// root.render(<App />);






//10|05-------------------------------------------------------------------------------------------------------------

import ReactDOM from "react-dom/client";
import "./globalStyles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./src/pages/homePage";
import SearchPage from "./src/pages/amazonSearchPage";
import SignUp from "./src/Pages/signUp";
import { useState } from "react";
import ProductInfo from "./src/pages/productInfo";
import AppContext from "./src/context/appContext";

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);

const categories = [
    "Fresh",
    "Amazon MiniTV",
    "Sell",
    "Best Sellers",
    "Mobiles",
    "Todays Deals",
    "Prime",
    "Fashion",
    "Electronics",
];

const App = () => {
    const [searchText, setSearchText] = useState("");

    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomePage />,
        },
        {
            path: "/search",
            element: <SearchPage />,
        },
        {
            path: "/search/:id",
            element: <ProductInfo />,
        },
        {
            path: "/signup",
            element: <SignUp />,
        },
    ]);

    const [cart, setCart] = useState([]);
    const addToCart = (elem) => {
        console.log(elem);
        const isPresent = cart.findIndex((cI) => cI.id === elem.id);
        if (isPresent === -1) {
            const newCart = [...cart];
            newCart.push({
                title: elem.title,
                id: elem.id,
                price: elem.price,
                count: 1,
            });
            setCart(newCart);
        } else {
            const newCart = cart.map((cartItem) => {
                if (cartItem.id === elem.id) {
                    const newCartItem = { ...cartItem };
                    newCartItem.count = newCartItem.count + 1;
                    return newCartItem;
                } else return cartItem;
            });
            setCart(newCart);
        }
    };

    const contextValues = {
        cart,
        addToCart,
        categories,
        searchText,
        setSearchText,
    };
    console.log(cart);
    return (
        <AppContext.Provider value={contextValues}>
            <RouterProvider router={router} />;
        </AppContext.Provider>
    );
};

root.render(<App />);