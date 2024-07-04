const ProductInfoCard=(props)=>{
  const {data = {}} = props;
  return(
    
    <div className="product-info-card">
      <h3>{data.title}</h3>
      <div className="product-item-cards-container">
        {data.products.map((elem)=>(
          <div className="products-item-card">
            <img src={elem.img}/>
            <h5>{elem.title}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};


export default ProductInfoCard;