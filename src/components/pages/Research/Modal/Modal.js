import React from "react";
import {ReactSVG} from "react-svg";

import styles from "./Modal.module.css";

import cross from "../../../../assets/Close.svg";

export default function Modal({active, setActive}) {
    return (
        <div className={active ? `${styles.modal} ${styles.active}` : `${styles.modal}`}
             onClick={() => setActive(false)}>
            <div className={styles.modal_content} onClick={e => e.stopPropagation()}>
                <ReactSVG src={cross} wrapper="span" className={styles.cross} onClick={() => setActive(false)}/>
                <div className={styles.title}>
                    Юзабилити-тестирование
                </div>
                <div className={styles.info}>
                    <span className={styles.bold}> Юзабилити-тестирование </span>- это качественное пользовательское
                    исследование, направленное на:
                </div>
                <div className={styles.info}>
                    - проверку гипотез (подтверждение или опровержение какого-либо
                    предположения);
                </div>
                <div className={styles.info}>
                    - проверку верности UX-решений (Насколько хорош мой комбобокс? Может,
                    стоило использовать здесь
                    чекбоксы?);
                </div>
                <div className={styles.info}>
                    - проверку достаточности/удобства функционала после проектирования
                    интерфейса нового раздела
                    (Возможно, мне стоило предложить пользователю еще один способ достижения цели? Или предложить
                    достигать цели иным способом?).
                </div>
                <div className={styles.info}>
                    Проводится, когда полностью готов <span className={styles.blue}>кликабельный прототип</span> и
                    сформирован
                    сценарий для конкретного
                    функционального модуля.
                </div>
                <div className={styles.info}>
                    После создания прототипа по постановке и последующей проверки дизайна на
                    соответствие, составляются
                    сценарии для проведения ЮТ (см. протокол), прототип дорабатывается в соответствии с разработанными
                    сценариями. Прототип должен позволять пользователю выполнять сценарии тестирования (открывать
                    выпадающие списки, вызывать модальные окна, совершать переходы по страницам и т.д.).
                </div>
                <div className={styles.info}>
                    Перед тем, как приступить к подготовке к исследованию, лучше проверить себя
                    и свою работу с помощью
                    эвристик юзабилити <span className={styles.blue}>Якоба Нильсена</span> (ключевые принципы,
                    позволяющие спроектировать действительно
                    удобный интерфейс).
                </div>
                <button className={styles.button} onClick={() => setActive(false)}>Закрыть</button>
            </div>
        </div>
    )
}