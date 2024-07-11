// import { IoSearchSharp } from "react-icons/io5";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { BiCartAdd } from "react-icons/bi";

// import ProductInfoCard from "../components/ProductInfoCard";


// //Array of categories for dynamic appearance

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


//   const ProductInfoCards = [
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

  

//   }
   
//   ]

//   //convert element into component
// const HomePage = ()=> {
//   return (
//   <div className="homepage-root-container"> 
//     <nav className="homepage-nav">
//       <h4>Amazon.in</h4>
//       <p>Address:
//         <br />
//         LPU University</p>

//       <div className="homepage-search-container">
//         <select>
//           <option value="All">All</option>
//           <option value="Electronics">Electronics</option>
//           <option value="Fashion">Fashion</option>
//           <option value="Books">Books</option>
//           <option value="Sports">Sports</option>
//           <option value="Home & Kitchen">Home & Kitchen</option>
//           <option value="Beauty">Beauty</option>
//           <option value="Grocery">Grocery</option>
//           <option value="Baby">Baby</option>
//           <option value="Pet Supplies">Pet Supplies</option>
//         </select>
//         <input  placeholder="Search Amazon.in"/>
//         <button >
//         <IoSearchSharp />
//         </button>
//       </div>
//       <h5>
//         Returns 
//         <br />
//         & Orders
//       </h5>
//       <h1>
//         {/* Cart */}
//         <BiCartAdd />
//         </h1>
//     </nav>
//     <div className="homepage-category-bar">
//       <button><GiHamburgerMenu />All</button>
//       <div className="category-item">
//         {/* <p>Fresh</p>
//         <p>Amazon miniTv</p>
//         <p>Sell</p> */}
//         {categories.map((elem)=>{
//           return <p key="elem">{elem}</p>
//         })}


//       </div>
//       </div>

//       <div className="homepage-body">
// <img alt="op" src="https://images-eu.ssl-images-amazon.com/images/G/31/INSLGW/pc_unrec_refresh._CB555261616_.jpg" height="100%" width="1500px" className="carousal-image"/>

// <div className="products-cards-container">
//   {/* <div className="products-info-card">Card 1</div>
//   <div className="products-info-card">Card 2</div>
//   <div className="products-info-card">Card 3</div>
//   <div className="products-info-card">Card 4</div> */}
//   {ProductInfoCards.map((elem)=>{
//     return <ProductInfoCard data = {elem}/>;
//   })}
// </div>
// </div>

    
//   </div>
//   )
// };



// //--------------------------------------------------------------------------------------------------------------



// export default HomePage;




//05|07------------------------------------------------------------------

// import { IoSearchSharp } from "react-icons/io5";
// import { RxHamburgerMenu } from "react-icons/rx";
// import ProductInfoCard from "../components/productInfoCard";
// import Navbar from "../components/navbar";
// import CategoryBar from "../components/categoryBar";

// const HomePage = (props) => {
//     const { productInfoCards, categories, setSearchText } = props;
//     return (
//         <div className="homepage-root-container">
//             <Navbar setSearchText={setSearchText} />
//             <CategoryBar categories={categories} />
//             <div className="homepage-body">
//                 <img
//                     src="https://images-eu.ssl-images-amazon.com/images/G/31/OHL/24/BAU/feb/PC_hero_1_2x_1._CB582889946_.jpg"
//                     className="carousal-image"
//                 />
//                 <div className="products-cards-container">
//                     {productInfoCards.map((elem) => {
//                         return <ProductInfoCard data={elem} />;
//                     })}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default HomePage;



//10|05------------------------------------------------------

import ProductInfoCard from "../components/productInfoCard";
import Navbar from "../components/navbar";
import CategoryBar from "../components/categoryBar";
import { useNavigate } from "react-router-dom";
import useGetProducts from "../hooks/useGetProducts";

const HomePage = () => {
    const navigate = useNavigate();
    const openSearchPage = () => {
        navigate("/search");
    };

    const products = useGetProducts({ isSearchTextDependent: false });

    let cnt = 0;
    const reqLength = 16;
    const filteredProducts = products.filter((elem, idx) => {
        if (Math.random() >= 0.5 || reqLength - cnt === products.length - idx) {
            if (cnt < reqLength) {
                cnt++;
                return true;
            } else return false;
        } else return false;
    });
    const dummy = [0, 1, 2, 3]; // [...Array(4).keys()]
    return (
        <div className="homepage-root-container">
            <Navbar openSearchPage={openSearchPage} />
            <CategoryBar />
            <div className="homepage-body">
                <img
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/OHL/24/BAU/feb/PC_hero_1_2x_1._CB582889946_.jpg"
                    className="carousal-image"
                />
                <div className="products-cards-container">
                    {dummy.map((elem) => {
                        return <ProductInfoCard key={elem} data={filteredProducts.slice(elem * 4, elem * 4 + 4)} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default HomePage;