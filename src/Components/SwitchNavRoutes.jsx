import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Registration from "./Registration";
import UserLogin from "./UserLogin";
import Agents from "./Agents";
import EditAgent from "./EditAgent";
import Home from "./Home";
import NotFoundPage from "./NotFoundPage";

export default function SwitchNavRoutes() {
    return(
        <Switch>
            <Route
                exact path="/"
                component={Home}
            />
            <Route
                path='/agents'
                component={Agents}
            />
            <Route
                path='/EditAgent'
                component={EditAgent}
            />
            <Route
                path='/login'
                component={UserLogin}
            />
            <Route
                path='/register'
                component={Registration}
            />
            <Route
                component={NotFoundPage}
            />
        </Switch>
    )
}