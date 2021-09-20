import React from "react";
import {ReactSVG} from "react-svg";

import Navbar from "../../Navbar";
import Table from "./Table/Table";

import styles from "./Research.module.css";

import one from "../../../assets/one.svg";
import two from "../../../assets/two.svg";
import three from "../../../assets/three.svg";

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
                        ознакомиться <a target="_blank" rel="noreferrer"
                                        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">здесь</a>.
                    </div>
                </div>
                <div className={styles.table}>
                    <Table/>
                </div>
                <div className={styles.note}>
                    <div className={styles.noteItem}>
                        <ReactSVG src={one} wrapper="span" className={styles.num}/>
                        <span>
                            Аналитика
                            <br/>
                            (сбор и формулирование требований)
                        </span>
                    </div>
                    <div className={styles.noteItem}>
                        <ReactSVG src={two} wrapper="span" className={styles.num}/>
                        <span>
                            Проектирование
                            <br/>
                            (дизайн и разработка)
                        </span>
                    </div>
                    <div className={styles.noteItem}>
                        <ReactSVG src={three} wrapper="span" className={styles.num}/>
                        <span>
                            Релиз
                            <br/>
                            (поддержка и развитие)
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}