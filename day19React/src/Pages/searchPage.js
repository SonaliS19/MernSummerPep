import CategoryBar from "../components/categoryBar"
import Navbar from "../components/navbar"

const SearchPage =(props)=>{  
  const {categories} = props;

  const customStyles = {
    padding: "48px",
    textAlign: "center",
    backgroundColor: "Yellow",
  };

  let searchText = "";
  console.log("initially: ", searchText);

  const handleSearch = (e)=>{
    // console.log("search text: ", e.target.value);
    const val = e.target.value;
    console.log("search text: ", val);
  }
  return(
    <div>
      <Navbar/>
      <CategoryBar categories={categories}/>

      <div style={customStyles}>
        <input type="text" onChange={handleSearch}/>
      </div>
    </div>
  )

}

export default SearchPage;