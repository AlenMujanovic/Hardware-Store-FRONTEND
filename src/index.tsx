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
import AdministratorLoginPage from "./components/AdministratorLoginPage/AdministratorLoginPage";
import AdministratorDashboard from "./components/AdministratorDashboard/AdministratorDashboard";
import AdministratorDashboardCategory from "./components/AdministratorDashboardCategory/AdministratorDashboardCategory";
import AdministratorDashboardFeature from "./components/AdministratorDashboardFeature/AdministratorDashboardFeature";
import AdministratorDashboardArticle from "./components/AdministratorDashboardArticle/AdministratorDashboardArticle";
import AdministratorDashboardPhoto from "./components/AdministratorDashboardPhoto/AdministratorDashboardPhoto";
import ArticlePage from "./components/ArticlePage/ArticlePage";
import { UserLogoutPage } from "./components/UserLogoutPage/UserLogoutPage";
import { AdministratorLogoutPage } from "./components/AdministratorLogoutPage/AdministratorLogoutPage";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <HashRouter>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/user/login" component={UserLoginPage} />
                <Route path="/user/logout" component={UserLogoutPage} />
                <Route path="/user/register" component={UserRegistrationPage} />
                <Route path="/category/:cId" component={CategoryPage} />
                <Route path="/administrator/login" component={AdministratorLoginPage} />
                <Route path="/administrator/logout" component={AdministratorLogoutPage} />
                <Route exact path="/administrator/dashboard/" component={AdministratorDashboard} />
                <Route path="/administrator/dashboard/category/" component={AdministratorDashboardCategory} />
                <Route path="/administrator/dashboard/article/" component={AdministratorDashboardArticle} />
                <Route path="/administrator/dashboard/photo/:aId" component={AdministratorDashboardPhoto} />
                <Route path="/article/:aId" component={ArticlePage} />
                <Route
                    path="/administrator/dashboard/feature/:cId"
                    component={AdministratorDashboardFeature}
                />
            </Switch>
        </HashRouter>
    </React.StrictMode>
);

reportWebVitals();
