import React from "react";

import Navbar from "../../Navbar";
import Table from "./Table/Table";

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
                <div className={styles.info}>
                    <div className={styles.info_text}>
                        Пользовательские исследования - важная часть процесса проектирования продукта, которая
                        позволяет проверить сформулированные при прототипировании или на этапе выявления требований
                        гипотезы, а также убедиться в правильности принятых решений.
                    </div>
                    <div>
                        Ниже мы рассказываем об исследованиях, которые мы проводим - когда и какое выбрать и на каком
                        этапе это можно сделать. С общими рекомендациями об исследованиях можно
                        ознакомиться <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">здесь</a>.
                    </div>
                </div>
                <div  className={styles.table}>
                    <Table/>
                </div>
            </div>
        </div>
    )
}