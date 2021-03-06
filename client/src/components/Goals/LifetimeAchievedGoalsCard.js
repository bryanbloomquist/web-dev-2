import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
// import API from "../../utils/API";          // Need a Query to pull Run, Bike, and Swim Data

function AchievedGoalsCard(props) {
    return (
        <Card className="card-wide text-dark bg-light">
            <Card.Title className="display-4">Lifetime Acheivements</Card.Title>
            <Card.Body className="h5">
                <Row className="mb-2">
                    <Col md={2}>
                        Run
                                        </Col>
                    <Col md={10}>
                        <div className="progress-bar bg-danger rounded" style={{ width: "80%" }}>80%</div>
                        {/* <div className="progress-bar bg-success rounded" style={{ width: API.calcActivity("run") }}>80%</div> */}
                    </Col>
                </Row>
                <Row className="mb-2">
                    <Col md={2}>
                        Bike
                                        </Col>
                    <Col md={10}>
                        <div className="progress-bar bg-success rounded" style={{ width: "60%" }}>60%</div>
                        {/* <div className="progress-bar bg-success rounded" style={{ width: API.calcActivity("bike") }}>80%</div> */}
                    </Col>
                </Row>
                <Row className="mb-2">
                    <Col md={2}>
                        Swim
                                        </Col>
                    <Col md={10}>
                        <div className="progress-bar bg-primary rounded" style={{ width: "20%" }}>20%</div>
                        {/* <div className="progress-bar bg-success rounded" style={{ width: API.calcActivity("swim") }}>80%</div> */}
                    </Col>
                </Row>
            </Card.Body>
        </Card>

    );
}

export default AchievedGoalsCard;