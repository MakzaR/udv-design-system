import React from 'react';
import p from './patterns.module.css';
import Content from "./Content/Content";
import Navbar from "../../Navbar";

const Patterns = () => {
    return (
        <div className={p.patterns}>
            <Navbar/>
            <Content/>
        </div>

    )
}

export default Patterns;