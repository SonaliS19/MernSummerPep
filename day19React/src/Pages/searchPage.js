// import { useState } from "react";
// import CategoryBar from "../components/categoryBar";
// import Navbar from "../components/navbar";

// const SearchPage = (props) => {
//     const { categories } = props;
//     const [searchText, setSearchText] = useState("");
//     const [products, setProducts] = useState([]);

//     async function getData(e) {
//         const val = e.target.value;
//         const res = await fetch(`https://dummyjson.com/products/search?q=${val}`);
//         const data = await res.json();
//         setProducts(data.products);
//         console.log("API! Called");
//     }

//     return (
//         <>
//             <Navbar setSearchText={setSearchText} />
//             <CategoryBar categories={categories} />
//             <div>
//                 {products.map((elem) => {
//                     return <p key={elem.id}>{elem.title}</p>;
//                 })}
//             </div>
//         </>
//     );
// };

// export default SearchPage;



//05|07-----------------------------------------------------------------------------

// import { useEffect, useState } from "react";
// import CategoryBar from "../components/categoryBar";
// import Navbar from "../components/navbar";

// const SearchPage = (props) => {
//     const { categories, searchText, setSearchText } = props;
//     const [products, setProducts] = useState([]);

//     async function getData() {
//         const res = await fetch(`https://dummyjson.com/products/search?q=${searchText}`);
//         const data = await res.json();
//         setProducts(data.products);
//     }

//     useEffect(() => {
//         getData();
//     }, [searchText]);

//     return (
//         <>
//             <Navbar setSearchText={setSearchText} />
//             <CategoryBar categories={categories} />
//             <div>
//                 {products.map((elem) => {
//                     return <p key={elem.id}>{elem.title}</p>;
//                 })}
//             </div>
//         </>
//     );
// };

// export default SearchPage;



//10|05------------------------------------------------------------------

import { useContext } from "react";
import CategoryBar from "../components/categoryBar";
import Navbar from "../components/navbar";
import useGetProducts from "../hooks/useGetProducts";
import AppContext from "../context/appContext";

const SearchPage = (props) => {
    const { categories } = props;
    const products = useGetProducts();
    const { addToCart } = useContext(AppContext);

    return (
        <>
            <Navbar />
            <CategoryBar categories={categories} />
            <div>
                {products.map((elem) => {
                    return (
                        <div style={{ width: "400px", backgroundColor: "yellow", margin: "24px auto" }}>
                            <h2 key={elem.id}>{elem.title}</h2>
                            <button
                                onClick={() => {
                                    addToCart(elem);
                                }}
                            >
                                Add to Cart
                            </button>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default SearchPage;