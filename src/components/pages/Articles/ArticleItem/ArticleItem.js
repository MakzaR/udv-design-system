import React from "react";

import styles from "./ArticleItem.module.css";

export default function ArticleItem(props) {

    return(
        <div className={styles.content}>
            <div className={styles.item}>
                <div>
                    <div className={styles.image}>
                        <img src={props.image} alt={'pic'}/>
                    </div>
                </div>
                <div className={styles.itemContent}>
                    <div className={styles.header}>{props.header}</div>
                    <br/>
                    <div className={styles.text}>{props.text}</div>
                    <hr/>
                    <div className={styles.author}>
                        <div className={styles.writer}>Автор:</div>
                        <div className={styles.writerName}>{props.writerName}</div>
                        <div className={styles.position}>{props.position}</div>
                    </div>
                    <br/>
                    <div>
                        <span className={styles.constTimeText}>Время на прочтение: </span>
                        <span className={styles.time}>{props.timeToRead}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}