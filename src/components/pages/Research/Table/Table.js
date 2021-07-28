import React from "react";

import styles from "./Table.module.css";

export default function Table() {
    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th className={styles.firstColumn}>Исследование</th>
                    <th className={styles.secondColumn}>Этапы проекта</th>
                    <th className={styles.thirdColumn}>Что получим?</th>
                    <th className={styles.fourthColumn}/>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className={styles.firstColumn}>Глубинное интервью</td>
                    <td className={styles.secondColumn}>svg</td>
                    <td className={styles.thirdColumn}>Глубинные проблемы, истинные причины, много другой информации</td>
                    <td className={styles.fourthColumn}>Стрелочка</td>
                </tr>
                <tr>
                    <td>Интервью</td>
                    <td>svg</td>
                    <td>Развернутые ответы на подготовленные вопросы, полезные отклонения от темы</td>
                    <td>Стрелочка</td>
                </tr>
                <tr>
                    <td>Наблюдение / Shadowing</td>
                    <td>svg</td>
                    <td>Контекст работы с продуктом, окружение пользователя, условия, в которых он работает</td>
                    <td>Стрелочка</td>
                </tr>
                <tr>
                    <td>Анкетирование</td>
                    <td>svg</td>
                    <td>Статистические данные, ответы без возможности уточнения, подготовка к интервью</td>
                    <td>Стрелочка</td>
                </tr>
                <tr>
                    <td>Метод сортировки карточек</td>
                    <td>svg</td>
                    <td>Мнение пользователя по вопросу организации разделов / очередности шагов и т.д.</td>
                    <td>Стрелочка</td>
                </tr>
                <tr>
                    <td>Коридорное тестирование</td>
                    <td>svg</td>
                    <td>Проверка небольшой гипотезы и/или мнение коллег</td>
                    <td>Стрелочка</td>
                </tr>
                <tr>
                    <td>A/B/N тестирование</td>
                    <td>svg</td>
                    <td>Лучший вариант из нескольких, статистика</td>
                    <td>Стрелочка</td>
                </tr>
                <tr>
                    <td>Юзабилити-тестирование</td>
                    <td>svg</td>
                    <td>Проверка прототипа и функциональности по сценарию, проверка гипотез</td>
                    <td>Стрелочка</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}