import React from 'react'
import Footer from './components/Footer/Footer';
import HeaderComponent from './components/Header/HeaderComponent';
import { Outlet } from 'react-router-dom';

function  Layout(){
return(
    <>
     <HeaderComponent/>
     {/* in this our header and  footer remains same but we dynamically passes the other section 
     to do this we have to import outlet */}
     {/* outlet opr ka or nechy ka content same rkhy ga jaha pr bhi outlet dedia vo chez ap change krskty hu */}
     <Outlet/>
     <Footer/>
    </>
)
}
export default Layout;
// to use a layout we use proper syntax we have to tell main.jsx that we are using layout