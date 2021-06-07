import React from 'react'
import './Product.css' //css imported
import { FaStar, FaRegHeart, FaShoppingCart, FaInfoCircle } from 'react-icons/fa'; // react icons imported
import sendData from './SendData'

//recieving props from Product
//every instance of ProductUi have a property called props
const ProductUi = (props) => {
  //product is an object with propertirs named price, title, qty,desc,img
  const { product } = props;
   //we recieve product via props
return (
  
  <>
    <div className="row mb-4 product-div">
      <div className="col-md-5 col-lg-3 col-xl-3">
        <div className=" product-img-div">
          {/* image of the product */}
          <img alt={product.title} className="img-responsive product-img img-fluid" src={product.img} />
        </div>
      </div>
      <div className="col-md-7 col-lg-9 col-xl-9">
        <div className="row">
          <div className="col-lg-7 col-xl-7 product-body">
            {/* Title of the product */}
            <h5 className="mt-4 mb-3">{product.title}</h5>
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            <hr></hr>
            {/* Description of the product */}
            <p className="mb-3">{product.desc}
            </p>
          </div>
          <div className="col-lg-5 col-xl-5  product-footer">
            {/* Price of the product */}
            <h5 className="mb-3 mt-4"><span>Price: ${product.price}</span></h5>
            <div className="my-4">

              {/* Buttons */}

              {/* Add to cart btn */}
              {/* on cliking the add to cart btn the product will be added to cart using sendData */}
              <button className=" mx-2 mb-1 addtocart-btn" onClick = {() => sendData(product)}> 
                <FaShoppingCart style={{ marginRight: "6px" }}/>Add to cart</button>
                {/* Details btn */}
              <button className=" mx-2 mb-1 detail-btn">
                <FaInfoCircle style={{ marginRight: "6px" }} />Details</button>
            </div>
            {/* Heart btn */}
            <button className="px-3 mb-3 mx-2 heart-btn" >
              <FaRegHeart style={{ backgroundColor: "" }} /></button>
          </div>

        </div>
      </div>
    </div>
  </>
);
}
export default ProductUi;
