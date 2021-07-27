import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";

import styles from './Patterns.module.css';

import Navbar from "../../Navbar";
import PatternsNavbar from "./Content/PatternsNavbar/PatternsNavbar";
import IndentationSystem from "./Content/IndentationSystem/IndentationSystem";
import Validation from "./Content/Validation/Validation";
import Animation from "./Content/Animation/Animation";

export default function Patterns() {
    return (
        <div className={styles.patterns_page}>
            <Navbar className={styles.navbar}/>
            <div className={styles.line_dark}/>
            <div className={styles.patterns_content}>
                <div className={styles.heading}>
                    Паттерны
                </div>
                <div className={styles.navigation}>
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
        </div>
    )
}
