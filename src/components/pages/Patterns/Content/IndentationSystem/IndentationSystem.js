import React from "react";
import {ReactSVG} from "react-svg";

import styles from './IndentationSystem.module.css';

import ISImage from '../../../../../assets/ISImage.svg';

export default function IndentationSystem() {
    return (
        <div  className={styles.textContent}>
            <div className={styles.info}>
                В нашем дизайне используется мягкая 8-пиксельная сетка. Это значит, что жестких колонок мы не используем
                - наши продукты слишком разные и сложные, чтобы загонять их в такие рамки. Но для удобства используем
                систему вертикальных отступов, кратных 8 пикселям.
            </div>
            <div className={styles.info}>
                Используйте отступы разной величины, чтобы группировать схожее (например, заголовок и абзац текста) и
                отделять разные сегменты (конец абзаца и следующий заголовок).
            </div>
            <div className={styles.info}>
                Помните, что в одинаковых случаях следует использовать одни и те же отступы!
            </div>
            <ReactSVG src={ISImage} className={styles.image}/>
        </div>
    )
}
