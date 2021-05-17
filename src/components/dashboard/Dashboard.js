import './Dashboard.css';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import im1 from '../../assets/img1.jpg'
import im2 from '../../assets/img2.jpg'
import im3 from '../../assets/img3.jpg'
import im4 from '../../assets/img4.jpg'
// import Logout from '../Logout'
import Header from '../Header'
// import {Link, NavLink } from "react-router-dom";
// import { Navbar, Nav, Container } from 'react-bootstrap';



function App() {
  return (
    <div className="App">
     
      <Header />
     
      <AliceCarousel autoPlay="true" autoPlayInterval="2000" disableButtonsControls="true" disableDotsControls="true" infinite>
      <img src={im1} className="sliderimg"/>
      <img src={im2} className="sliderimg"/>
      <img src={im3} className="sliderimg"/>
      <img src={im4} className="sliderimg"/>
      </AliceCarousel>
      
    </div>
  );
}

export default App;
