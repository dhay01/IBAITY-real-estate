import React from 'react';
import '../style/index.css';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Logo from './logo'
import android from '../assets/image 14.png'
import ios from '../assets/image 15.png'

export default function Footer() {
    return (

        <div className="footer">
            <Row className="footer-secondary">
                <Col className="col1">
                    <Row>
                        <h2><span className="about-us">
                              <Logo/>
                        </span> about us
                        </h2>

                    </Row>
                    <Row>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </Row>
                </Col>
                <Col className="col1">
                    <ul>
                        <li>
                            HELP
                        </li>
                        <li>
                            contact us
                        </li>
                        <li>
                            FAQ
                        </li>
                        <li>
                            terms & conditions
                        </li>
                        <li>
                            privacy policy
                        </li>
                    </ul>
                </Col>
                <Col className="col1">
                    <ul>
                        <li>
                            CONTACT US
                        </li>
                        <li>
                            +9647710000000
                        </li>
                        <li>
                            ibaity@gmail.com
                        </li>
                        <li>
                            SOCIAL MEDIA ICONS
                        </li>

                    </ul>
                </Col>
                <Col className="col2">
                    <ul>
                        <li>
                            DOWNLOAD OUR MOBILE APP ON
                        </li>
                        <li>
                            <img className="ios" src={ios} alt="ios"/>
                        </li>
                        <li>
                            <img  src={android} alt="ios"/>
                        </li>

                    </ul>
                </Col>
            </Row>
<h6 className="copyright">Copyright © 2023. loremipsum. All rights reserved.</h6>
        </div>


    )
}

