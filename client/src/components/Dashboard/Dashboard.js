import React from "react";
//react-bootstrap
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
//Components
import ActivityCard from "./ActivityCard";
import BadgesCard from "./BadgesCard";
import ChallengesCard from "./ChallengesCard";
import GoalsCard from "./GoalsCard";
import SocialCard from "./SocialCard";
import Run from "../images/run.png";
import Bike from "../images/bike.png";
import Swim from "../images/swim.png";

function Dashboard(props) {
    return (
        <Container fluid>
            <Row>
                <ActivityCard
                    sport={"Run"}
                    units={["mi", "km", "minutes"]}
                    color={"#ed4b4b"}
                    img={Run}
                    user={props}
                    activity={props.runActivity}
                    onLogClick={props.onLogClick}
                    onDistanceChange={props.onDistanceChange}
                    onUnitChange={props.onUnitChange}
                />
                <ActivityCard
                    sport={"Ride"}
                    units={["mi", "km", "minutes"]}
                    color={"#4fc147"}
                    img={Bike}
                    user={props}
                    activity={props.rideActivity}
                    onLogClick={props.onLogClick}
                    onDistanceChange={props.onDistanceChange}
                    onUnitChange={props.onUnitChange}
                />
                <ActivityCard
                    sport={"Swim"}
                    units={["meters", "yards", "minutes"]}
                    color={"#4b68ed"}
                    img={Swim}
                    user={props}
                    activity={props.swimActivity}
                    onLogClick={props.onLogClick}
                    onDistanceChange={props.onDistanceChange}
                    onUnitChange={props.onUnitChange}
                />
            </Row>
            <Row>
                <GoalsCard user={props.user} />
                <ChallengesCard user={props.user} />
                <BadgesCard user={props.user} />
            </Row>
            <Row>
                <SocialCard user={props.user} />
            </Row>
        </Container >

    )
}

export default Dashboard;
