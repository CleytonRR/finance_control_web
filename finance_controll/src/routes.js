import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom"
import { isAuthenticated } from './service/auth'
import Login from './components/login/Login'
import SingUp from './components/singUp/index'
import Dashboard from './pages/dashboard/index'


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props => isAuthenticated() ? (
            <Component {...props} />
        ): (
            <Redirect to={{ pathname:"/", state: { from: props.location }}} />
        )}
    />
)

export default function Routers() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>

                <Route path="/singUp">
                    <SingUp />
                </Route>

                <PrivateRoute path="/dashboard" component={Dashboard}/>
            </Switch>
        </Router>
    );
}
