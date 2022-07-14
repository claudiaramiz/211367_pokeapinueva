import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from "./App";
import Informacion from "./Informacion";

const Route = () => {

    return (

        <div className="container">
            <BrowserRouter>
                <Switch>
                    <Route path="/App" component={App}></Route>
                    <Route path="/Informacion" component={Informacion}></Route>
                </Switch>
            </BrowserRouter>
        </div>
    );

};

export default Route;
