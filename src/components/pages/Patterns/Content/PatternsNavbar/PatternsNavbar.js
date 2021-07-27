import p from './PatternsNavbar.module.css';
import React from "react";
import {NavLink} from "react-router-dom";

const PatternsNavbar = () => {
    return (
        <div className={p.item}>
            <NavLink to='/patterns/IndentationSystem' className={p.item} activeClassName={p.activeLink}>
                Система отступов</NavLink>
            <NavLink to='/patterns/Validation' className={p.item} activeClassName={p.activeLink}>
                Валидация</NavLink>
            <NavLink to='/patterns/Animation' className={p.item} activeClassName={p.activeLink}>
                Анимация</NavLink>
        </div>
    )
}

export default PatternsNavbar;