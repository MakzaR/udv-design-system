import React from "react";

import Navbar from "../../Navbar";

import styles from "./Research.module.css";

export default function Research() {
    return (
        <div className={styles.research_page}>
            <Navbar className={styles.navbar}/>
            <div className={styles.line_dark}/>
            <div className={styles.research_content}>
                <div className={styles.heading}>
                    Исследования
                </div>

            </div>
        </div>
    )
}