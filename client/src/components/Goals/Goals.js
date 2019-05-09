import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

function Goals(props) {
    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Jumbotron>
                        <h1>Goals</h1>
                        <h2>
                            
                        </h2>
                        <img src={props.avatar} className="text-center" alt="User Avatar" />
                    </Jumbotron>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1 className="text-center">User Detials Area</h1>
                </Col>
            </Row>
        </Container>
    );
}

export default Goals;
