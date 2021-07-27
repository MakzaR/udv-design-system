import React from "react";
import Navbar from "../../Navbar";

import styles from './UX.module.css'

export default function UX() {

    return (
        <div>
            <Navbar/>
            <div className={styles.line_dark}/>
            <span className={styles.work_in_progress}>/Work in progress.../</span>
        </div>
    )
}