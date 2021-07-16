import NavListLinks from "./NavListLinks";
import React from "react";

export default function Nav() {

    ///Map the Nav Links with data from filterOptions
    const navRoutes = navOptions.map((routeData, idx) =>
        <NavListLinks
            key={idx}
            routeName={routeData.routeName}
            routePath={routeData.routePath}
        />
    )

    return(
        <nav className="topNav">
            <ul>
                {navRoutes}
            </ul>
        </nav>
    )
}


//data used to populate nav Links
const navOptions = [
    {
        routeName: "Home",
        routePath: "//"
    },
    {
        routeName: "Login",
        routePath: "/login"
    },
    {
        routeName: "Register",
        routePath: "/register"
    },
    {
        routeName: "Agents",
        routePath: "/agents"
    },
]