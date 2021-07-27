import React from "react";
import {NavLink} from "react-router-dom";

import styles from './PatternsNavbar.module.css';

export default function PatternsNavbar() {
    return (
        <div className={styles.item}>
            <NavLink to='/patterns/IndentationSystem' className={styles.item} activeClassName={styles.activeLink}>
                Система отступов</NavLink>
            <NavLink to='/patterns/Validation' className={styles.item} activeClassName={styles.activeLink}>
                Валидация</NavLink>
            <NavLink to='/patterns/Animation' className={styles.item} activeClassName={styles.activeLink}>
                Анимация</NavLink>
        </div>
    )
}
