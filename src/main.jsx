import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, Routes, Route, RouterProvider } from "react-router-dom";
import HeaderComponent from './components/Header/HeaderComponent.jsx';
import Aboutus from './components/Header/Aboutus/Aboutus.jsx';
// import Contactus from './components/Contactus/Contactus.jsx';
import ProductComponent from './components/Products/ProductComponent.jsx';
import UserComponent from './components/UserComponent/UserComponent.jsx'
import Footer from './components/Footer/Footer.jsx';
import Layout from './Layout.jsx';
import Contactus from './components/Contactus/Contactus.jsx';
// to use react router we have to wrap our application inside browser router 













const products = [
  {
    id :1,
    name: "Smartphone X",
    description: "Advanced smartphone with AI camera and fast processor.",
    price: 799.99,
    imageUrl: "https://img.freepik.com/free-vector/smartphone-with-gradient-wallpaper_23-2147846501.jpg?t=st=1718448941~exp=1718452541~hmac=401245b96febaba08d93a85def50d98fd080947501d805016f77d9a0245419ef&w=740"
  },
  {
    id:2,
    name: "Laptop Y",
    description: "Lightweight laptop with high-resolution display and long battery life.",
    price: 1299.99,
    imageUrl: "https://img.freepik.com/free-photo/vintage-camera-pencils-holder-adhesive-notes-open-laptop_23-2147979105.jpg?t=st=1718451675~exp=1718455275~hmac=83afd6677a6e3be32c12d447fb18803202e566594bf9b10dafd3a621bd0d00f9&w=740"
  },
  {
  
    id:3,
    name: "Wireless Headphones Z",
    description: "Premium headphones with noise-cancellation technology.",
    price: 349.99,
    imageUrl: "https://img.freepik.com/free-photo/rendering-smart-home-device_23-2151039340.jpg?t=st=1718451754~exp=1718455354~hmac=d6c3d613a8d73f0fda20511f33605d2c9eb75ae0d83db13ddec24c6b8cd21fc0&w=826"
  },
  {id:4,
    name: "Smartwatch A",
    description: "Fitness tracker with heart rate monitoring and GPS.",
    price: 199.99,
    imageUrl: "https://img.freepik.com/free-vector/realistic-fitness-trackers_23-2148530529.jpg?t=st=1718451827~exp=1718455427~hmac=f258ec539c579fee774940adf0d394f7ab480abfa493a4ad48f5accb8a265d17&w=740"
  },
  {
    id:5,
    name: "Camera B",
    description: "Professional-grade camera with interchangeable lenses.",
    price: 1499.99,
    imageUrl: "https://img.freepik.com/premium-photo/camera-with-word-canon-it_912214-807.jpg?w=740"
  },
  {
    id:6,
    name: "Tablet C",
    description: "Large screen tablet with multitasking capabilities.",
    price: 599.99,
    imageUrl: "https://img.freepik.com/premium-psd/man-is-outside-room-is-holding-tablet_908696-420.jpg?w=740"
  },
  { id:7,
    name: "Gaming Console D",
    description: "Next-generation gaming console with 4K support.",
    price: 499.99,
    imageUrl: "https://img.freepik.com/free-photo/laptop-with-joystick_144627-12150.jpg?t=st=1718452263~exp=1718455863~hmac=b4da791bdb06c29da14377bc110f4dab9713c8cc07a90bd2c9ef155632c8974d&w=740"
  },
  { id:8,
    name: "Wireless Speaker E",
    description: "Portable speaker with Bluetooth connectivity and water resistance.",
    price: 129.99,
    imageUrl: "https://img.freepik.com/free-photo/man-using-smart-speaker_23-2149036847.jpg?t=st=1718452395~exp=1718455995~hmac=e6791210d29fe935593328de15d6f31b42364e5f93f4f6cc6abaf1374e235294&w=740"
  },
  { id:9,
    name: "Smart Home Device F",
    description: "Voice-controlled smart home assistant with integrated hub.",
    price: 299.99,
    imageUrl: "https://img.freepik.com/free-photo/young-man-using-smart-home-application-software-touching-screen-turn-light-by-mobile-phone_482257-1934.jpg?t=st=1718452452~exp=1718456052~hmac=fd4030933ce7ede6753be6c66bdb207f5c7fae6dd338f29d85526b1726f7710e&w=826"
  },
  { id:10,
    name: "Fitness Tracker G",
    description: "Slim fitness band with sleep tracking and step counter.",
    price: 79.99,
    imageUrl: "https://img.freepik.com/free-vector/flat-design-fitness-trackers_23-2148533619.jpg?t=st=1718452577~exp=1718456177~hmac=1210346f9c843f8e2847064e8d61af853c40005ebd1afa33dfc6b379bc3de6a7&w=740"
  },
  { id:11,
    name: "External SSD H",
    description: "High-speed external SSD with large storage capacity.",
    price: 249.99,
    imageUrl: "https://img.freepik.com/free-photo/man-using-external-storage-used_23-2149388496.jpg?t=st=1718452527~exp=1718456127~hmac=68da31418f21ad7a7460787456e801bce420f5aafb891bec5c52f0f39888a048"
  },
  { id:12,
    name: "Wireless Mouse I",
    description: "Ergonomic wireless mouse with customizable buttons.",
    price: 49.99,
    imageUrl: "https://img.freepik.com/free-photo/purple-computer-mouse_1260-12.jpg?t=st=1718452628~exp=1718456228~hmac=c6d034231fd67542499e744df2ac7d6db4494bb036ea1722fc0f54a400571bd6&w=740"
  },
  { id:13,
    name: "Wireless Mouse I",
    description: "Ergonomic wireless mouse with customizable buttons.",
    price: 49.99,
    imageUrl: "https://img.freepik.com/free-photo/purple-computer-mouse_1260-12.jpg?t=st=1718452628~exp=1718456228~hmac=c6d034231fd67542499e744df2ac7d6db4494bb036ea1722fc0f54a400571bd6&w=740"
  },
  
];

// 1st way to create router
const router= createBrowserRouter([
// inserting all objects that we need
{

  path:'/',
  element:<Layout/>,
  children:[
    {
path:"",
element: <div className="product-container">
{products.map(product=> (
 <ProductComponent 
 key = {product.id}
 name = {product.name} description={product.description} price={product.price} imageUrl={product.imageUrl}/>
//  <ProductComponent name = {product.name} description={product.description} price={product.price} imageUrl={product.imageUrl} />
))}
</div>
    },{
      path: "about",
      element:<Aboutus/>

    },
    ,{
      path: "contact",
      element:<Contactus/>

    },
    // {
    //   path: "users/:name",
    //   element:<UserComponent/>
    // },
    ,
    {
      path: "users",
      element:<UserComponent/>
    },
    ,
    {
      path: "users/:id/:name",
      element:<UserComponent/>
    }
    
  ]
}
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <RouterProvider router={router}/>
    

  </React.StrictMode>,
)
// i want that my header and footer remains same the content inside it changes
// 1st way to work in every directory  like we have to import component in every file thats not an optimized way
// 2nd way is to create a layout file  inside component