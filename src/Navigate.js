import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { About } from './Components/About';
import { Contact } from './Components/Contact';
import { Home } from './Components/Home';

export const Navigate = () => {
    return (
       
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/contact" component={Contact}></Route>
                </Switch>
    )
}
