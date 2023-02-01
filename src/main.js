import React from 'react';
import './style/index.css';
import Nav from './components/navbar'
import MainContainer from './components/main-container'
import Footer from './components/footer';

function Main() {
    return (
        <div>
            <Nav/>
            <MainContainer/>
            <Footer/>
        </div>


    )
        ;
}

export default Main;