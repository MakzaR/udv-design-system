import React, {useState, useEffect} from "react";
import {NavLink, useLocation} from "react-router-dom";

import "./Navbar.css"

export default function Navbar() {
    const location = useLocation();
    const {pathname} = location;
    const currentPage = pathname.split("/")[1];

    console.log(document.documentElement.className)

    return (
        <div className={currentPage === "components" ? "navbar grey" : "navbar"}>
            <div className="name">
                <NavLink to='/home' className="logo">UDV</NavLink>
                <span className="system_name">Дизайн-система</span>
            </div>
            <div className="menu">
                <NavLink to='/components' className="item"
                         activeClassName="activeLink components">Компоненты</NavLink>
                <NavLink to='/patterns' className="item"
                         activeClassName="activeLink">Паттерны</NavLink>
                <NavLink to='/ux' className="item"
                         activeClassName="activeLink">Принципы UX</NavLink>
                <NavLink to='/research' className="item"
                         activeClassName="activeLink">Исследования</NavLink>
                <NavLink to='/articles' className="item"
                         activeClassName="activeLink">Статьи</NavLink>
            </div>
        </div>

        // <div className={styles.navbar}>
        //     <div className={styles.name}>
        //         <NavLink to='/home' className={styles.logo}>UDV</NavLink>
        //         <span className={styles.system_name}>Дизайн-система</span>
        //     </div>
        //     <div className={styles.menu}>
        //         <NavLink to='/components' className={styles.item}
        //                  activeClassName={styles.activeLink}>Компоненты</NavLink>
        //         <NavLink to='/patterns' className={styles.item}
        //                  activeClassName={styles.activeLink}>Паттерны</NavLink>
        //         <NavLink to='/ux' className={styles.item}
        //                  activeClassName={styles.activeLink}>Принципы UX</NavLink>
        //         <NavLink to='/research' className={styles.item}
        //                  activeClassName={styles.activeLink}>Исследования</NavLink>
        //         <NavLink to='/articles' className={styles.item}
        //                  activeClassName={styles.activeLink}>Статьи</NavLink>
        //     </div>
        // </div>
    )
}
