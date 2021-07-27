import React from "react";

import Navbar from "../../Navbar";

import styles from "../UX/UX.module.css";

export default function Figma() {

    return (
        <div>
            <Navbar/>
            <span className={styles.work_in_progress}>/Work in progress.../</span>
        </div>
    )
}