import React from "react";
import NavListLinks from "./NavListLinks";
import NavListIconLinks from './NavListIconLinks';
import '../css/nav.css';
import {faHome, faUserSecret} from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
    ///Map the Nav Links with data from filterOptions
    const navRoutes = navOptions.map((routeData, idx) =>
        <NavListLinks
            key={idx}
            routeName={routeData.routeName}
            routePath={routeData.routePath}
        />
    )

    ///Map the Nav Links with data from filterOptions
    const navRouteIcons = navRouteIconOptions.map((routeData, idx) =>
        <NavListIconLinks
            key={idx}
            iconClass={routeData.iconClass}
            icon={routeData.icon}
            routeName={routeData.routeName}
            routePath={routeData.routePath}
        />
    )

    return(
        <nav className="topNav">
            <ul>
                {navRouteIcons}
                {navRoutes}
            </ul>
        </nav>
    )
}

//data used to populate nav Links
const navOptions = [
    {
        routeName: "Login",
        routePath: "/login"
    },
    {
        routeName: "Register",
        routePath: "/register"
    },
]

const navRouteIconOptions = [
    {
        routePath: "/",
        iconClass: "fa fa-home",
        icon: faHome
    },
    {
        routePath: "/agents",
        iconClass: "fa fa-user-secret",
        icon: faUserSecret,
    },
]