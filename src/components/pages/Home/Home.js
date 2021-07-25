import React from "react";
import Navbar from "../../Navbar";

import styles from "./Home.module.css"

export default function Home() {

    return (
        <div className={styles.dark_background}>
            <Navbar/>
            Главная страница
        </div>
    )
}