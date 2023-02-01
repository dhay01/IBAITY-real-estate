import React from 'react';
import '../style/index.css';
import BreadcrumbExample from "./breadcrumbs";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import user from "../assets/userplaceholder.png";
import Button from 'react-bootstrap/Button';
import whatsapp from '../assets/WhatsApp.png'
import ringer from '../assets/Ringer Volume.png'
import DescriptionContainer from "./description-container";
import Table from "./table";
import Qrcode from "./QR";
import Carousal from "./carousal";
import next from "../assets/Polygon1.png"
function MainContainer() {
    return (
        <div className="mainContainer">
            <BreadcrumbExample/>
            <div className="secondaryContainer">
                <h2>House Residential</h2>
                <div className="mainPhotoContainer">
                    <Row>
                        <Col>
                            <div>

                            </div>
                        </Col>
                        <Col xs={4} className="ownerInfo">
                            <div className="ownerInfo1">
                                <img src={user} className="photoPlaceholder" alt="Logo"/>
                                <div className="ownerInfo2">
                                    <h3>AGENT'S NAME</h3>
                                    <h6>last seen (3h) ago</h6>
                                </div>
                                <div className="ownerInfo-secondary">
                                    <h5>address: al-russafa</h5>
                                    <h5>city: baghdad</h5>
                                    <h5>country: iraq</h5>

                                </div>
                                <hr/>
                                <div className="ownerInfo-contact">
                                    <h4>contact info:</h4>
                                    <h5>email: ibaity@gmail.com</h5>
                                    <h5>phone number: 9647710000000</h5>
                                </div>

                            </div>
                            <div className="button-group">
                                <Row>
                                    <Col>
                                        <Button className="buttonPrimary">
                                            <img src={ringer} alt="img"/>
                                            call</Button>
                                    </Col>
                                    <Col>
                                        <Button className="buttonPrimary">
                                            <img src={whatsapp} alt="img"/>
                                            send message</Button>
                                    </Col>
                                </Row>

                            </div>
                            <div className="button-group2">
                                <Row>
                                    <Button className="buttonsecondary">
                                        all real estate of this publisher
                                    </Button>
                                </Row>

                            </div>
                        </Col>
                    </Row>

                </div>
                <DescriptionContainer/>
                <br/>
                <h3>Table of details</h3>
                <Row>
                    <Col>
                        <Table/>
                    </Col>
                    <Col xs={1}>
                    </Col>
                    <Col>
                        <Qrcode/>
                    </Col>
                </Row>
                <div className="similar">
                     <h3>Similar real estate</h3>
                </div>
                <Row>
                    <Col>
                        <Carousal/>
                    </Col>
                    <Col>
                        <Carousal/>
                    </Col>
                    <Col>
                        <Carousal/>
                    </Col>
                     <Col xs={1} className="next">
                         <img src={next} alt="next"/>

                </Col>

                </Row>


            </div>

        </div>
    )
}

export default MainContainer;