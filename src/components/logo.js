import React from 'react';
import '../style/index.css';
import logo from '../assets/logo.png'; // Importing the image

export default function Logo() {

    return (
        <div>
            <img src={logo} alt="Logo"/>
        </div>
    )

}
