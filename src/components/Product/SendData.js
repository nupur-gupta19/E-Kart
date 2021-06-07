import {db} from '../../firebase'

// sending the product and its data to cart

function sendData(product){
    // adding the product data to cart database 
    db.collection("cart").add({
      category: product.category,
      desc: product.desc,
      key: product.key,
      price: product.price,
      qty: 1,
      title: product.title,
      img: product.img
    })
    // after clicking on add to cart btn alert message will show 
      .then((docRef) => {
        alert("Data Successfully Submitted");
      })
   
  }

  export default sendData;