import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom"
import Login from './components/login/Login'
import SingUp from './components/singUp/index'


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
        </Switch>
    </Router>
  );
}
