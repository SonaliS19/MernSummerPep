import { GiHamburgerMenu } from "react-icons/gi";

const CategoryBar = (props) =>{
  const {categories } = props;
  
  return(
    <div className="homepage-category-bar">
<button><GiHamburgerMenu />All</button>
<div className="category-item">
 
  {categories.map((elem)=>{
    return <p key="elem">{elem}</p>
  })}


</div>
</div>
  );
};

export default CategoryBar;