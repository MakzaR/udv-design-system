import React from "react";

import Navbar from "../../Navbar";
import Cards from "../UX/Cards/Cards"

import styles from './UX.module.css'

export default function UX() {

    return (
        <div className={styles.ux_page}>
            <Navbar className={styles.navbar}/>
            <div className={styles.line_dark}/>
            <div className={styles.ux_content}>
                <div className={styles.heading}>Принципы UX</div>
                <div className={styles.info}>
                    <div className={styles.info_text}>
                        UX - процесс определения проблем пользователя и решение этих
                        проблем с целью повышения его удовлетворенности. Улучшение взаимодействия между пользователем и
                        приложением на пути пользователя к цели. <br/><br/>Ниже описаны принципы, придерживаясь которых,
                        вы
                        сможете спроектировать наилучший пользовательский опыт!
                    </div>
                </div>
                <Cards className={styles.cards}/>
            </div>
        </div>
    );
}