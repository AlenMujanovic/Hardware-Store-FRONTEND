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
import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import ContactPage from "./components/ContactPage/ContactPage";
import UserLoginPage from "./components/UserLoginPage/UserLoginPage";

const menuItems = [
    new MainMenuItem("Home", "/"),
    new MainMenuItem("Contact", "/contact/"),
    new MainMenuItem("Log in", "/user/login/"),
];

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <MainMenu items={menuItems}></MainMenu>
        <HashRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/user/login" element={<UserLoginPage />} />
            </Routes>
        </HashRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
