import React from "react";
import './App.scss'
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom'
import Login from './pages/login/index'
import Home from './pages/home'
import Index from "./pages/index";

function App() {
    return (
        <div className="P-app">
            <HashRouter>
                <Switch>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/index" component={Index}></Route>
                    <Route exact path="/" component={Index}></Route>
                    <Redirect to={"/home"}></Redirect>
                </Switch>
            </HashRouter>
        </div>
    )
}

export default App