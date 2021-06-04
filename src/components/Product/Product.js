import React from 'react'
import { Form} from 'react-bootstrap';
import Header from '../Header'
import Footer from '../Footer'
import ProductList from'./ProductList'
import {db} from '../../firebase'
import './Product.css'
import Collapse from 'react-bootstrap/Collapse'
import { RiArrowDownSLine } from "react-icons/ri";
import { IoShirtOutline,IoFastFoodOutline } from "react-icons/io5";
import { GoDeviceDesktop } from "react-icons/go";
import banner1 from '../../assets/banner1.jpg'


class Product extends React.Component  
{
    constructor() 
    {
        super();
        this.state = 
        {
          products: [],
          openCollection: true,
          open:true,
          openBrand:true,
          
        };
      
    }  
    
    
     componentDidMount() {
            db.collection("products").onSnapshot(snapshot => {
              const products = snapshot.docs.map(doc => {
                const data = doc.data();
                data["id"] = doc.id;
                return data;
              });
              this.setState({ products: products});
            });
          }
      
      
    render()
    {
        const { products} = this.state;
        const { openCollection,open,openBrand } = this.state;
        
    return(
  <div>
     <Header />    
      <div className="row col-md-12">
          <div className="col-md-3">
              <div className="bg-white product-menu container">
                  <div className="pro-menu-head mb-4 pt-4 pb-3"><h2><i>Shop Page</i></h2></div>
                   <div className="pro-collection">
                    <div style={{textAlign:"left"}} className="my-2 mx-5"><h4><button style={{border:"none",backgroundColor:"white"}} onClick={() => this.setState({ openCollection: !openCollection })} 
                    aria-expanded={openCollection}>Categories<RiArrowDownSLine className="" style={{textAlign:"right"}}/></button></h4></div><hr></hr>
                    <div className="mb-3" >
                    <Collapse in={this.state.openCollection}>
                    <ul style={{listStyleType:"none",textAlign:"left",marginLeft:"35px",marginBottom:"30px"}}> 
                      <li>Fashion <IoShirtOutline className="mx-2" /></li>
                      <li>Electronics<GoDeviceDesktop className="mx-2" /></li>
                      <li>Grocery<IoFastFoodOutline className="mx-2"/></li>
                    </ul>
                    </Collapse>
                    </div>
                  </div>

                  <div className="pro-price ">
                    <div style={{textAlign:"left"}} className="my-2 mx-5"><h4><button style={{border:"none",backgroundColor:"white"}} onClick={() => this.setState({ open: !open })} 
                    aria-expanded={open}>Price<RiArrowDownSLine className=""/></button></h4></div><hr></hr>
                    <div className="mb-3" >
                    <Collapse in={this.state.open}>
                    <ul style={{listStyleType:"none",textAlign:"left",marginLeft:"35px",marginBottom:"30px"}}> 
                      <li>$10 - $100</li>
                      <li>$100 - $200</li>
                      <li>$200 - $300</li>
                    </ul>
                    </Collapse>
                    </div>
                  </div>
                  <div className="pro-brand ">
                    <div style={{textAlign:"left"}} className="my-2 mx-5"><h4><button style={{border:"none",backgroundColor:"white"}} onClick={() => this.setState({ openBrand: !openBrand })} 
                    aria-expanded={openBrand}>Brand<RiArrowDownSLine style={{}}/></button></h4></div><hr></hr>
                    <div className="mb-3" >
                    <Collapse in={this.state.openBrand}>
                    <ul style={{listStyleType:"none",textAlign:"left",marginLeft:"35px",marginBottom:"30px"}}> 
                     <Form.Check type="checkbox" label="Balenciaga"/>
                     <Form.Check type="checkbox" label="Adidas" />
                     <Form.Check type="checkbox" label="Givenchy" />
                     <Form.Check type="checkbox" label="Samsung" />
                    </ul>
                    </Collapse>
                    </div>
                  </div>
                  <div>
                    <img src={banner1}alt="banner" style={{width:"95%",height:"100%",marginBottom:"30px",marginTop:"30px",borderRadius:"10px"}}/>
                  </div>

              </div>
         </div>
         <div className="col-md-9">
          <div className="mx-2">
          <ProductList products={products} />
          </div>
         </div>
    </div>
        
        <Footer />
        </div>
    );
   }
}
export default Product
