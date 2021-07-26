import React from 'react';
import p from './patterns.module.css';
import Content from "./Content/Content";
import Navbar from "../../Navbar";
import {Redirect, Route, Switch} from "react-router-dom";
import IndentationSystem from "./Content/IndentationSystem/IndentationSystem";
import Validation from "./Content/Validation/Validation";
import Animation from "./Content/Animation/Animation";

const Patterns = () => {
    return (
            <div className={p.patterns}>
                <Navbar/>
                <div className={p.content}>
                    <Content/>

                </div>
            </div>

    )
}

export default Patterns;