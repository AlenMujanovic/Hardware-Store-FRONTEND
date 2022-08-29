import React from "react";
import { Container, Nav, NavLink } from "react-bootstrap";

export class MainMenu extends React.Component {
    render() {
        return (
            <Container>
                <Nav variant="tabs">
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/contact">Contact</NavLink>
                    <NavLink href="/login">Log in</NavLink>
                </Nav>
            </Container>
        );
    }
}
