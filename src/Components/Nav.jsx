import React, {useContext} from "react";
import NavListLinks from "./NavListLinks";
import NavListIconLinks from './NavListIconLinks';
import '../css/nav.css';
import {faHome, faUserSecret} from "@fortawesome/free-solid-svg-icons";
import AuthContext from "./AuthContext";

export default function Nav() {

    const auth = useContext(AuthContext);

    ///Map the Nav Links with data from filterOptions
    const navRoutes = notLoggedInNav.map((routeData, idx) =>
        <NavListLinks
            key={idx}
            routeName={routeData.routeName}
            routePath={routeData.routePath}
        />
    )

    ///Map the Nav Links with data from filterOptions
    const navRouteIcons = loggedInNavRouteIconOptions.map((routeData, idx) =>
        <NavListIconLinks
            key={idx}
            iconClass={routeData.iconClass}
            icon={routeData.icon}
            routeName={routeData.routeName}
            routePath={routeData.routePath}
        />
    )

    return (
        <>
            <nav className="topNav">
                <ul>
                    {!auth.user && (
                        <>
                            <NavListIconLinks
                                iconClass="fa fa-home"
                                icon={faHome}
                                routePath="/"
                            />
                            {navRoutes}
                        </>
                    )}
                    {auth.user && (
                        <>
                            {navRouteIcons}
                            <li>
                                <a onClick={() => auth.logout()} className="logout">Logout</a>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
            {auth.user && (
                <div className="greeting">
                    <p>Hello, {auth.user.username}!</p>
                </div>
            )}
        </>
    )
}

//data used to populate nav Links
const notLoggedInNav = [
    {
        routeName: "Login",
        routePath: "/login"
    },
    {
        routeName: "Register",
        routePath: "/register"
    },
]


const loggedInNavRouteIconOptions = [
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