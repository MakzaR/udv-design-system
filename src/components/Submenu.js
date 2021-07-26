import {NavLink, useLocation} from "react-router-dom";

import "./Navbar.css";
import components from "../images/components.svg";
import templates from "../images/templates.svg";
import {ReactSVG} from "react-svg";


export default function Submenu() {
    return (
        <div className="submenu">
            <NavLink to='/components/react' className='submenu_item'>
                <ReactSVG src={components} wrapper="span" className="submenu_icon react"/>
                Компоненты на React
            </NavLink>
            <NavLink to='/components/figma' className='submenu_item'>
                <ReactSVG src={templates} wrapper="span" className="submenu_icon figma"/>
                Шаблоны в Figma
            </NavLink>
        </div>
    )
}