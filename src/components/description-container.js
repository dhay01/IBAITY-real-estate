import React from "react";
import '../style/index.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Map from "./iframe";
function DescriptionContainer() {
    return (

        <div className="descriptionContainer">
            <h2>description </h2>
            <div className="secondContainer">
                <Row>
                    <Col className="descriptionSection">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                            <span>
                                <ul>
                                    <li>
                                        Sed ut perspiciatis unde omnis iste natus.
                                    </li>
                                    <li>
                                          error sit voluptatem accusantium doloremque.
                                    </li>
                                     <li>
                                        Sed ut perspiciatis unde omnis iste natus.
                                    </li>
                                    <li>
                                          error sit voluptatem accusantium doloremque.
                                    </li>
                                     <li>
                                        Sed ut perspiciatis unde omnis iste natus.
                                    </li>
                                    <li>
                                          error sit voluptatem accusantium doloremque.
                                    </li>
                                </ul>
                            </span>

                        </p>
                    </Col>

                    <Col>
                        <Row className="price">
                            <Col>
                                <h2>price <span className="price-dinar">(dinar)</span></h2>
                                <h4 className="price-dinar">date published:</h4>
                                <h4 className="price-dinar">ID</h4>
                            </Col>
                            <Col className="align-right">
                                <h4>800,000,00</h4>
                                <h4 className="price-dinar">31 jan 2023</h4>
                                <h4 className="price-dinar">12345678</h4>
                            </Col>

                        </Row>
                        <Row>
                            <Map/>
                        </Row>
                    </Col>
                </Row>
            </div>
            <div className="icons">

            </div>
        </div>
    )
}

export default DescriptionContainer;
