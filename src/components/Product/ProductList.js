import React from 'react'
import ProductUi from'./ProductUi'

const  ProductList=(props) =>
//we are recieving data here in constant called products using props from app.js
{
   const { products } = props;
    return (
      
        <div className="productList">
           {/* //iterating through prductList// */}
        {products.map((product) =>  {
         return(
            <ProductUi
             //we are passing props to ProductUi
              key={product.key}
              product={product}
              category={product.category} 
              name={product.title}
              price={product.price} 
              qty={product.qty} 
              img={product.img}
            />
          )
        })}
      </div>
    );
}
export default ProductList;