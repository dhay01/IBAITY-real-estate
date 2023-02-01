import React from "react";
import '../style/index.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import QR from '../assets/QRcode.png';
import hand from '../assets/Hand.png'
import Button from 'react-bootstrap/Button';
import download from '../assets/Download.png'
import mockup from '../assets/iPhone 13 Pro.png'
import logo from '../assets/footer-logo-qr.png'
export default function Qrcode() {
    return (
        <div className="qrcode-container">
            <Row>
                <Col>
                    <img src={QR} alt="qrcode"/>
                </Col>
                <Col xs={2}>
                    <img className="hand" src={hand} alt={hand}/>
                </Col>
                <Col>
                    <h5>scan this QR code for more details</h5>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button className="buttonprimary-download">print and download<img className="download"
                                                                                      src={download}
                                                                                      alt="download"/></Button>
                </Col>

            </Row>
            <Row className="list-details">
                <Col xs={5}>
                    <ul>
                        <li>
                            house - residential
                        </li>
                        <li>
                            area : 150 m2
                        </li>
                        <li>
                            al-hathyiah - baghdad
                        </li>
                    </ul>


                </Col>
                <Col>
                    <img className="mockup" src={mockup} alt="mockup"/>
                </Col>
            </Row>

            <Row className="qr-footer">
                <Col>
                    <img className="logo-footer-qr" src={logo} alt="logo"/>
                </Col>
                 <Col className="link-footer-qr">
                    <h6>www.ibaity.com</h6>
                </Col>
            </Row>
        </div>


    )
}

