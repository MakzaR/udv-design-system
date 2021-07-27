import React from 'react';
import p from './Content.module.css';
import PatternsNavbar from "./PatternsNavbar/PatternsNavbar";
import {Route, Redirect, Switch} from "react-router-dom";
import IndentationSystem from "./IndentationSystem/IndentationSystem";
import Animation from "./Animation/Animation";
import Validation from "./Validation/Validation";

const Content = () => {
    return (
        <div className={p.content}>
            <div className={p.topic}>
                Паттерны
            </div>
            <div className={p.navbar}>
                <PatternsNavbar/>
            </div>
            <div>
                <Switch>
                    <Route path='/patterns/IndentationSystem' component={IndentationSystem}/>
                    <Route path='/patterns/Validation' component={Validation}/>
                    <Route path='/patterns/Animation' component={Animation}/>
                    <Redirect from='/patterns' to='/patterns/IndentationSystem'/>
                </Switch>

            </div>

        </div>
    );
}

export default Content;