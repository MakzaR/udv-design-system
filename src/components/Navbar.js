import {NavLink, useLocation} from "react-router-dom";

import "./Navbar.css"

export default function Navbar() {
    const location = useLocation();
    const {pathname} = location;
    const currentPage = pathname.split("/")[1];

    const checkPage = (page, primaryClass, secondaryClass) => {
        return currentPage === page ? `${primaryClass} ${secondaryClass}` : primaryClass;
    }

    return (
        <div className={checkPage("components", "navbar", "grey")}>
            <div className="name">
                <NavLink to='/home'
                         className={checkPage("home", "logo", "green")}>
                    UDV
                </NavLink>
                <span
                    className={checkPage("home", "system_name", "light")}>
                    Дизайн-система
                </span>
            </div>
            <div className="menu">
                <NavLink to='/components'
                         className={checkPage("home", "item", "light")}
                         activeClassName="activeLink components">
                    Компоненты
                    <span className={checkPage("components", "polygon", "green")}/>
                </NavLink>
                <NavLink to='/patterns'
                         className={checkPage("home", "item", "light")}
                         activeClassName="activeLink">
                    Паттерны
                </NavLink>
                <NavLink to='/ux'
                         className={checkPage("home", "item", "light")}
                         activeClassName="activeLink">
                    Принципы UX
                </NavLink>
                <NavLink to='/research'
                         className={checkPage("home", "item", "light")}
                         activeClassName="activeLink">
                    Исследования
                </NavLink>
                <NavLink to='/articles'
                         className={checkPage("home", "item", "light")}
                         activeClassName="activeLink">
                    Статьи
                </NavLink>
            </div>
        </div>
    )
}
