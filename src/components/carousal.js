import React from "react";
import '../style/index.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Carousal() {
    return (
        <div className="similar-section">

            <h5>
                big house for rental
            </h5>
            <h6>
                1 feb 2023
            </h6>

            <Row className="similar-details">
                <ul>
                    <li>
                        650,000 IQD /month
                    </li>
                    <li>
                        250 ㎡
                    </li>
                </ul>


            </Row>
            <Row className="similar-footer">
                <Col className="link-footer-qr">
                    <h4>
                        owner
                    </h4>

                </Col>
                <Col className="link-footer-qr">
                    <h5>zayoonah - baghdad</h5>
                </Col>


            </Row>

        </div>

    )

}