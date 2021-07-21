import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Registration from "./Registration";
import UserLogin from "./UserLogin";
import Agents from "./Agents";
import AddAgent from "./AddAgent"
import EditAgent from "./EditAgent";
import DeleteAgent from "./DeleteAgent";
import Home from "./Home";
import NotFoundPage from "./NotFoundPage";

export default function SwitchNavRoutes() {
    return (
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
                path='/add_agent'
                component={AddAgent}
            />
            <Route
                path='/edit_agent'
                component={EditAgent}
            />
            <Route
                path='/delete_agent'
                component={DeleteAgent}
            />
            {/*<Route*/}
            {/*    path='/login'*/}
            {/*    component={UserLogin}*/}
            {/*/>*/}
            {/*<Route*/}
            {/*    path='/register'*/}
            {/*    component={Registration}*/}
            {/*/>*/}
            <Route
                component={NotFoundPage}
            />
        </Switch>
    )
}