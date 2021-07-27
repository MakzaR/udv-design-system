import {NavLink} from "react-router-dom";
import {ReactSVG} from "react-svg";

import styles from "./Navbar.module.css";
import components from "../assets/components.svg";
import templates from "../assets/templates.svg";


export default function Submenu() {
    return (
        <div className={styles.submenu}>
            <NavLink to='/components/react' className={styles.submenu_item}>
                <ReactSVG src={components} wrapper="span" className={styles.react}/>
                Компоненты на React
            </NavLink>
            <NavLink to='/components/figma' className={styles.submenu_item}>
                <ReactSVG src={templates} wrapper="span" className={styles.figma}/>
                Шаблоны в Figma
            </NavLink>
        </div>
    )
}