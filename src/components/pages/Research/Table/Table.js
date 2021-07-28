import React from "react";
import {ReactSVG} from "react-svg";

import styles from "./Table.module.css";

import one from "../../../../assets/one.svg";
import two from "../../../../assets/two.svg";
import three from "../../../../assets/three.svg";
import arrow from "../../../../assets/arrow.svg";

export default function Table() {
    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th className={styles.firstColumn}>
                        Исследование
                    </th>
                    <th className={styles.secondColumn}>
                        Этапы проекта
                    </th>
                    <th className={styles.thirdColumn}>
                        Что получим?
                    </th>
                    <th className={styles.fourthColumn}/>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className={styles.firstColumn}>
                        Глубинное интервью
                    </td>
                    <td className={styles.secondColumn}>
                        <ReactSVG src={one} wrapper="span"/>
                        <ReactSVG src={three} wrapper="span"/>
                    </td>
                    <td className={styles.thirdColumn}>
                        Глубинные проблемы, истинные причины, много другой информации
                    </td>
                    <td className={styles.fourthColumn}>
                        <ReactSVG src={arrow} className={styles.arrow}/>
                    </td>
                </tr>
                <tr>
                    <td className={styles.firstColumn}>
                        Интервью
                    </td>
                    <td className={styles.secondColumn}>
                        <ReactSVG src={two} wrapper="span"/>
                        <ReactSVG src={three} wrapper="span"/>
                    </td>
                    <td className={styles.thirdColumn}>
                        Развернутые ответы на подготовленные вопросы, полезные отклонения от темы
                    </td>
                    <td className={styles.fourthColumn}>
                        <ReactSVG src={arrow} className={styles.arrow}/>
                    </td>
                </tr>
                <tr>
                    <td className={styles.firstColumn}>
                        Наблюдение / Shadowing
                    </td>
                    <td className={styles.secondColumn}>
                        <ReactSVG src={one} wrapper="span"/>
                    </td>
                    <td className={styles.thirdColumn}>
                        Контекст работы с продуктом, окружение пользователя, условия, в которых он работает
                    </td>
                    <td className={styles.fourthColumn}>
                        <ReactSVG src={arrow} className={styles.arrow}/>
                    </td>
                </tr>
                <tr>
                    <td className={styles.firstColumn}>
                        Анкетирование
                    </td>
                    <td className={styles.secondColumn}>
                        <ReactSVG src={one} wrapper="span"/>
                        <ReactSVG src={three} wrapper="span"/>
                    </td>
                    <td className={styles.thirdColumn}>
                        Статистические данные, ответы без возможности уточнения, подготовка к интервью
                    </td>
                    <td className={styles.fourthColumn}>
                        <ReactSVG src={arrow} className={styles.arrow}/>
                    </td>
                </tr>
                <tr>
                    <td className={styles.firstColumn}>Метод сортировки карточек</td>
                    <td className={styles.secondColumn}>
                        <ReactSVG src={one} wrapper="span"/>
                        <ReactSVG src={two} wrapper="span"/>
                        <ReactSVG src={three} wrapper="span"/>
                    </td>
                    <td className={styles.thirdColumn}>
                        Мнение пользователя по вопросу организации разделов / очередности шагов и т.д.
                    </td>
                    <td className={styles.fourthColumn}>
                        <ReactSVG src={arrow} className={styles.arrow}/>
                    </td>
                </tr>
                <tr>
                    <td className={styles.firstColumn}>Коридорное тестирование</td>
                    <td className={styles.secondColumn}>
                        <ReactSVG src={two} wrapper="span"/>
                    </td>
                    <td className={styles.thirdColumn}>
                        Проверка небольшой гипотезы и/или мнение коллег
                    </td>
                    <td className={styles.fourthColumn}>
                        <ReactSVG src={arrow} className={styles.arrow}/>
                    </td>
                </tr>
                <tr>
                    <td className={styles.firstColumn}>A/B/N тестирование</td>
                    <td className={styles.secondColumn}>
                        <ReactSVG src={two} wrapper="span"/>
                        <ReactSVG src={three} wrapper="span"/>
                    </td>
                    <td className={styles.thirdColumn}>
                        Лучший вариант из нескольких, статистика
                    </td>
                    <td className={styles.fourthColumn}>
                        <ReactSVG src={arrow} className={styles.arrow}/>
                    </td>
                </tr>
                <tr>
                    <td className={styles.firstColumn}>Юзабилити-тестирование</td>
                    <td className={styles.secondColumn}>
                        <ReactSVG src={two} wrapper="span"/>
                    </td>
                    <td className={styles.thirdColumn}>
                        Проверка прототипа и функциональности по сценарию, проверка гипотез
                    </td>
                    <td className={styles.fourthColumn}>
                        <ReactSVG src={arrow} className={styles.arrow}/>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}