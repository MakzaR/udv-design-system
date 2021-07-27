import React from "react";
import {ReactSVG} from "react-svg";

import Navbar from "../../Navbar";
import ArticleItem from "./ArticleItem/ArticleItem";

import styles from "./Articles.module.css";

import filter from "../../../assets/filter.svg";
import sort from "../../../assets/sort.svg";

import firstImage from "../../../images/articles1.jpg";
import secondImage from "../../../images/articles2.jpg";
import thirdImage from "../../../images/articles3.jpg";
import fourthImage from "../../../images/articles4.jpg";

export default function Articles() {
    const ArticlesPage = [
        {
            id: 1,
            image: firstImage,
            header: 'Неоморфизм: почему у тренда с хорошим UI плохой UX?',
            text: 'Всем известный тренд с приятной визуальной составляющей, тем не менее, имеет достаточно низкие показатели юзабилити. Почему так происходит?',
            writerName: 'Иванова Ольга',
            position: 'дизайнер отдела разработки',
            timeToRead: '10 минут',
        },
        {
            id: 2,
            image: secondImage,
            header: 'Как иллюстрации помогают сделать интерфейс дружелюбнее?',
            text: 'При этом необязательно использовать “детский” стиль. Широко используются и 3D иллюстрации, которые не отличить от реальных объектов.',
            writerName: 'Иванова Ольга',
            position: 'дизайнер отдела разработки',
            timeToRead: '10 минут',
        },
        {
            id: 3,
            image: thirdImage,
            header: 'Как спроектировать лучший дашборд? Реальный кейс',
            text: 'Каких правил необходимо придерживаться чтобы дашборд приносил пользу и помогал работать эффективнее. Делюсь опытом на основе реального кейса.',
            writerName: 'Иванова Ольга',
            position: 'дизайнер отдела разработки',
            timeToRead: '10 минут',
        },
        {
            id: 4,
            image: fourthImage,
            header: 'Дайджест: лучшие мобильные интерфейсы за декабрь 2020',
            text: 'Новое приложение Золотого Яблока обновление от Тинькофф, новые игроки в сфере EdTech и другие любопытные проекты, которые стоит увидеть!',
            writerName: 'Иванова Ольга',
            position: 'дизайнер отдела разработки',
            timeToRead: '10 минут',
        }
    ];

    const articleItemElements =
        ArticlesPage.map(i => <ArticleItem key={i.id}
                                           image={i.image}
                                           header={i.header}
                                           text={i.text}
                                           writerName={i.writerName}
                                           position={i.position}
                                           timeToRead={i.timeToRead}/>);

    return (
        <div className={styles.articles_page}>
            <Navbar className={styles.navbar}/>
            <div className={styles.line_dark}/>
            <div className={styles.articles_content}>
                <div className={styles.heading}>
                    Статьи
                </div>
                <div className={styles.filters}>
                    <div className={styles.filtersItem}>
                        <ReactSVG src={filter} wrapper="span"/>
                        Фильтрация
                    </div>
                    <div className={styles.filtersItem}>
                        <ReactSVG src={sort} wrapper="span"/>
                        Сортировать по:
                        <span className={styles.date_sort}>Дате (сначала новые) </span>
                        <span className={styles.polygon}/>
                    </div>
                </div>
                <div className={styles.articles}>
                    {articleItemElements}
                </div>
            </div>
        </div>
    )
}