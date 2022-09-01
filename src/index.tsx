import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.js";
import "popper.js/dist/popper.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "@fortawesome/fontawesome-free/css/fontawesome.min.css";
import { MainMenu, MainMenuItem } from "./components/MainMenu/MainMenu";
import { HashRouter, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import ContactPage from "./components/ContactPage/ContactPage";
import UserLoginPage from "./components/UserLoginPage/UserLoginPage";
import CategoryPage from "./components/CategoryPage/CategoryPage";
import { UserRegistrationPage } from "./components/UserRegistrationPage/UserRegistrationPage";

const menuItems = [
    new MainMenuItem("Home", "/"),
    new MainMenuItem("Contact", "/contact/"),
    new MainMenuItem("Log in", "/user/login/"),
    new MainMenuItem("Register", "/user/register/"),
    new MainMenuItem("Cat 1", "/category/1/"),
    new MainMenuItem("Cat 7", "/category/7/"),
    new MainMenuItem("Cat 21", "/category/21/"),
];

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <MainMenu items={menuItems}></MainMenu>
        <HashRouter>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/user/login" component={UserLoginPage} />
                <Route path="/user/register" component={UserRegistrationPage} />
                <Route path="/category/:cId" component={CategoryPage} />
            </Switch>
        </HashRouter>
    </React.StrictMode>
);

reportWebVitals();
