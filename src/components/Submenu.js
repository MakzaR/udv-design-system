import {NavLink} from "react-router-dom";
import {ReactSVG} from "react-svg";

import "./Navbar.css";
import components from "../assets/components.svg";
import templates from "../assets/templates.svg";


export default function Submenu() {
    return (
        <div className="submenu">
            <NavLink to='/components/react' className='submenu-item'>
                <ReactSVG src={components} wrapper="span" className="submenu_icon react"/>
                Компоненты на React
            </NavLink>
            <NavLink to='/components/figma' className='submenu-item'>
                <ReactSVG src={templates} wrapper="span" className="submenu_icon figma"/>
                Шаблоны в Figma
            </NavLink>
        </div>
    )
}