import React from "react";
import {NavLink} from "react-router-dom";

import styles from "./Navbar.module.css"

export default function Navbar() {
    return (
        <div>
            <ul>
                <li className="menu_item">
                    <NavLink to='/home' activeClassName={styles.activeLink}>
                        <div className={styles.logo}>UDV</div>
                    </NavLink>
                    Дизайн-система
                </li>
                <li className="menu_item">
                    <NavLink to='/components' activeClassName={styles.activeLink}>Компоненты</NavLink>
                </li>
                <li className="menu_item">
                    <NavLink to='/patterns'  activeClassName={styles.activeLink}>Паттерны</NavLink>
                </li>
                <li className="menu_item">
                    <NavLink to='/ux' activeClassName={styles.activeLink}>Принципы UX</NavLink>
                </li>
                <li className="menu__item">
                    <NavLink to='/research' activeClassName={styles.activeLink}>Исследования</NavLink>
                </li>
                <li className="menu__item">
                    <NavLink to='/articles' activeClassName={styles.activeLink}>Статьи</NavLink>
                </li>
            </ul>
        </div>
    )
}
