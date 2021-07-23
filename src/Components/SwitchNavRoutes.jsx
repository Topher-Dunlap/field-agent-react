import React, {useContext} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Registration from "./Registration";
import UserLogin from "./UserLogin";
import Agents from "./Agents";
import AddAgent from "./AddAgent"
import EditAgent from "./EditAgent";
import DeleteAgent from "./DeleteAgent";
import Home from "./Home";
import NotFoundPage from "./NotFoundPage";
import AuthContext from './AuthContext';


export default function SwitchNavRoutes() {

    const auth = useContext(AuthContext);

    return (
        <Switch>
            <Route
                exact path="/"
                component={Home}
            />
            <Route
                exact path='/agents'>
                {auth.user ? (<Agents/>) : (<Redirect to='/login'/>)}
            </Route>
            <Route
                exact path='/agents/add'>
                {auth.user ? (<AddAgent/>) : (<Redirect to='/login'/>)}
            </Route>
            <Route
                exact path='/agents/edit/:agent_id'>
                {auth.user ? (<EditAgent/>) : (<Redirect to='/login'/>)}
            </Route>
            <Route
                exact path='/agents/delete/:agent_id'>
                {auth.user ? (<DeleteAgent/>) : (<Redirect to='/login'/>)}
            </Route>
            <Route
                path='/login'
                component={UserLogin}
            />
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