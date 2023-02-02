import React from 'react';
import './style/index.css';
import Nav from './components/navbar'
import MainContainer from './components/main-container'
import Footer from './components/footer';
import NavbarFunction from "./components/navbar";

function Main() {
    return (
        <div>
            <NavbarFunction/>
            <MainContainer/>
            <Footer/>
        </div>


    )
        ;
}

export default Main;