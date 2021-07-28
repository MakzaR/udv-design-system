import React from "react";
import {NavLink, useLocation} from "react-router-dom";

import styles from "./Navbar.module.css";
import Submenu from "./Submenu";

export default function Navbar() {
    const location = useLocation();
    const {pathname} = location;
    const currentPage = pathname.split("/")[1];

    const checkPage = (page, primaryClass, secondaryClass) => {
        return currentPage === page ? `${primaryClass} ${secondaryClass}` : primaryClass;
    }

    return (
        <div className={checkPage("components", `${styles.navbar}`, `${styles.grey}`)}>
            <div className={styles.name}>
                <NavLink to='/home'
                         className={checkPage("home", `${styles.logo}`, `${styles.green}`)}>
                    UDV
                </NavLink>
                <span
                    className={checkPage("home", `${styles.system_name}`, `${styles.light}`)}>
                    Дизайн-система
                </span>
            </div>
            <div className={styles.menu}>
                <NavLink to='/components' id={styles.components}
                         className={checkPage("home", `${styles.item}`, `${styles.light}`)}
                         activeClassName={`${styles.activeLink} ${styles.components}`}>
                    Компоненты
                    <span className={checkPage("components", `${styles.polygon}`, `${styles.green}`)}/>
                    <Submenu/>
                </NavLink>
                <NavLink to='/patterns'
                         className={checkPage("home", `${styles.item}`, `${styles.light}`)}
                         activeClassName={styles.activeLink}>
                    Паттерны
                </NavLink>
                <NavLink to='/UX'
                         className={checkPage("home", `${styles.item}`, `${styles.light}`)}
                         activeClassName={styles.activeLink}>
                    Принципы UX
                </NavLink>
                <NavLink to='/research'
                         className={checkPage("home", `${styles.item}`, `${styles.light}`)}
                         activeClassName={styles.activeLink}>
                    Исследования
                </NavLink>
                <NavLink to='/articles'
                         className={checkPage("home", `${styles.item}`, `${styles.light}`)}
                         activeClassName={styles.activeLink}>
                    Статьи
                </NavLink>
            </div>
        </div>
    )
}
