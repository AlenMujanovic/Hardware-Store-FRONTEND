import React from "react";
import { Card, Container, Row } from "react-bootstrap";
import { faListAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Redirect } from "react-router-dom";
import api, { ApiResponse, getIdentity } from "../../api/api";
import RoledMainMenu from "../RoledMainMenu/RoledMainMenu";

interface AdministratorDashboardState {
    isAdministratorLoggedIn: boolean;
}

class AdministratorDashboard extends React.Component {
    state: AdministratorDashboardState;

    constructor(props: {} | Readonly<{}>) {
        super(props);

        this.state = {
            isAdministratorLoggedIn: true,
        };
    }

    componentWillMount() {
        this.getMyData();
    }

    componentWillUpdate() {
        this.getMyData();
    }

    private getMyData() {
        api("/api/administrator/", "get", {}, "administrator").then((res: ApiResponse) => {
            if (res.status === "error" || res.status === "login") {
                this.setLogginState(false);
                return;
            }
        });
    }

    private setLogginState(isLoggedIn: boolean) {
        const newState = Object.assign(this.state, {
            isAdministratorLoggedIn: isLoggedIn,
        });

        this.setState(newState);
    }

    render() {
        if (this.state.isAdministratorLoggedIn === false) {
            return <Redirect to="/user/login" />;
        }
        return (
            <Container>
                <RoledMainMenu role="administrator" />
                <Card>
                    <Card.Body>
                        <Card.Title>
                            <FontAwesomeIcon icon={faListAlt} /> Administrator Dashboard
                        </Card.Title>
                        <ul>
                            <li>
                                <Link to="/administrator/dashboard/category/">Categories</Link>
                            </li>
                            <li>
                                <Link to="/administrator/dashboard/feature/">Features</Link>
                            </li>
                        </ul>
                    </Card.Body>
                </Card>
            </Container>
        );
    }
}

export default AdministratorDashboard;
