import React from 'react';
import '../style/index.css';
import Logo from './logo'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import user from '../assets/user.png';
import ButtonDropdown, {UserBuntton} from './buttons'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/footer-logo-qr.png";

export default function NavbarFunction() {
    return (
        <div className="navbar">

            <Navbar fixed="top" className="navbar-bootstrap">

                <Navbar.Brand href="#">
                    <img className="logo-nav-qr" src={logo} alt="logo"/>
                </Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>

                    </Navbar.Text>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text className="nav-buttongroup">
                        <h5 className="language"> Language:</h5>
                        <ButtonDropdown/>
                       <UserBuntton/>
                    </Navbar.Text>
                </Navbar.Collapse>

            </Navbar>

        </div>


    );
};


