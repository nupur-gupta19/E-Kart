import React from "react";
// header and footer imported
import Header from "../Header"
import Footer from '../Footer'
// Images are imported from assets  
import fashion1 from '../../assets/fashion1.jpg'
import fashion2 from '../../assets/fashion2.jpg'
import './fashion.css';  //css for fashion page imported


function Fashion() {
    return(
    <div style={{backgroundColor:" #e1e5ea"}}>
         {/* Header is imported from Header.js */}
       <Header /> 
       <br></br>
       <div className="container">
        <div className="row col-md-12">
               {/* Women image and buuton */}
               <div className="col-md-6 small-container">
               <img src={fashion1} className="img-fluid women-image" alt="women" style={{ objectFit:"cover"}}/>
               <div className="middle">
               <a href="/product?category=Fashion"><button className="text">Women</button></a>
               </div>
              </div>
               {/* Men image and button */}
              <div className=" col-md-6 small-container">
              <img src={fashion2} alt="men" className="img-fluid men-image" style={{ objectFit:"cover"}}/>
              <div className="middle">
              <a href="/product?category=Fashion"><button className="text">Men</button></a>
               </div>
              </div>
       </div>
       </div> 
        {/* Footer is imported from Footer.js */}
       <Footer />
    </div>
    );
}
export default Fashion;