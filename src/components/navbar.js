import React from 'react';
import '../style/index.css';
import Logo from './logo'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import user from '../assets/user.png';
import ButtonDropdown from './buttons'

const Navbar = () => {
    return (

        <nav>
            <Row>
                <Col>
                    <div className="nav-logo">
                        <Logo/>
                        <span>
                 <h3 className="nav-text-main">real estate in IRAQ</h3>
            </span>
                    </div>
                </Col>
                <Col xs={4}></Col>
                <Col>
                    <Row className="nav-secondary">
                        <Col className="language" xs={2}>
                            language:
                        </Col>
                        <Col xs={3}>
                            <ButtonDropdown/>
                        </Col>
                        <Col>
                            <Row>
                                <Col>
                                    <img src={user} alt="Logo"/>
                                </Col>
                                <Col xs={8}>username</Col>
                                {/*<Col>*/}

                                {/*</Col>*/}
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>


        </nav>


    );
};

export default Navbar;
