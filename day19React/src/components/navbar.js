import { IoSearchSharp } from "react-icons/io5";
import { BiCartAdd } from "react-icons/bi";


// const NavBar = (props)=>
//   {
//     const {catefories} = props;
//     return(
//       <nav className="homepage-nav">
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
//     )
//   }

//   export default NavBar;





//---------------------------------------------------------------------------------------------


// const Navbar = ({ setSearchText }) => {
//   const handleSearch = (e) => {
//       setSearchText(e.target.value);
//   };

//   return (
//       <nav className="homepage-nav">
//           <h4>Amazon.in</h4>
//           <p>
//               Address:
//               <br />
//               LPU University
//           </p>
//           <div className="homepage-search-container">
//               <select />
//               <input type="text" onChange={handleSearch} />
//               <button>
//                   <IoSearchSharp />
//               </button>
//           </div>
//           <h5>Profile</h5>
//           <h5>Cart</h5>
//       </nav>
//   );
// };

// export default Navbar;



//10-07-----------------------------------------------------------------------

import { useContext } from "react";
import { IoSearchSharp } from "react-icons/io5";
import AppContext from "../context/appContext";

const Navbar = ({ openSearchPage }) => {
    const { setSearchText, cart } = useContext(AppContext);
    const handleSearch = (e) => {
        setSearchText(e.target.value);
    };

    return (
        <nav className="homepage-nav">
            <h4>Amazon.in</h4>
            <p>
                Address:
                <br />
                LPU University
            </p>
            <div className="homepage-search-container">
                <select />
                <input type="text" onChange={handleSearch} />
                <button onClick={openSearchPage}>
                    <IoSearchSharp />
                </button>
            </div>
            <h5>Profile</h5>
            <h5 title={JSON.stringify(cart)}>Cart</h5>
        </nav>
    );
};

export default Navbar;