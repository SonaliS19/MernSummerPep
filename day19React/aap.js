import ReactDOM from "react-dom/client"
//importing css file
import "./globalStyles.css"



import HomePage from "./src/Pages/homePage";
import SearchPage from "./src/Pages/searchPage"



const parent = document.getElementById("root");
//we have a reactRom now which is connected to the parent
const root = ReactDOM.createRoot(parent);




// //Array of categories for dynamic appearance

const categories =[
  "Fresh",
  "Fruits",
  "Vegetables",
  "Meat",
  "Dairy",
  "Bakery",
  "Frozen",
  "Snacks",
  "Drinks",
  "Personal Care",
  "Baby Care",
  "Pet Care",

  ]


const ProductInfoCards = [
    {
       id: 1,
    title: "Revamp",
    products:[
      {
      title: "toy",
      img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_furnishings_2._SY116_CB555624324_.jpg"
    },
    {
      title: "cloths",
      img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_decor_1._SY116_CB555624324_.jpg"
    },
    {
      title: "cloths",
      img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_storage_1._SY116_CB555624324_.jpg"
    },
    {
      title: "cloths",
      img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_lighting_2._SY116_CB555624324_.jpg"
    },
  ]

  

  }
   
  ]


// //component of react(have a fun)
const app = ()=>{
  return (
    <div>  
    {/* <h1>{HomePage()}</h1> */}
    <HomePage/>
    {/* <SearchPage categories={categories}/> */}
    </div>
  );
}

////when we'll use react element then we need to call here for rendering
// root.render(app(HomePage));

root.render(app());