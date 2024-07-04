import { IoSearchSharp } from "react-icons/io5";
import { BiCartAdd } from "react-icons/bi";
const NavBar = (props)=>
  {
    const {catefories} = props;
    return(
      <nav className="homepage-nav">
      <h4>Amazon.in</h4>
      <p>Address:
        <br />
        LPU University</p>

      <div className="homepage-search-container">
        <select>
          <option value="All">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Fashion">Fashion</option>
          <option value="Books">Books</option>
          <option value="Sports">Sports</option>
          <option value="Home & Kitchen">Home & Kitchen</option>
          <option value="Beauty">Beauty</option>
          <option value="Grocery">Grocery</option>
          <option value="Baby">Baby</option>
          <option value="Pet Supplies">Pet Supplies</option>
        </select>
        <input  placeholder="Search Amazon.in"/>
        <button >
        <IoSearchSharp />
        </button>
      </div>
      <h5>
        Returns 
        <br />
        & Orders
      </h5>
      <h1>
        {/* Cart */}
        <BiCartAdd />
        </h1>
    </nav>
    )
  }

  export default NavBar;