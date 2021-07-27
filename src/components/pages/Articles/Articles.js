import React from "react";
import Navbar from "../../Navbar";

import styles from "./Articles.module.css";

export default function Articles() {
    return (
        <div className={styles.articlesPage}>
            <Navbar className="navbar"/>
            <div className="articles-content">Статьи</div>
        </div>
    )
}