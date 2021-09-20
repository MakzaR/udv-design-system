import React, {Component} from "react";

import styles from "./Cards.module.css"

import Slider from "react-slick";
import image from "./image_for_card.svg";


export default class SimpleSlider extends Component {
    render() {
        const settings = {
            centerPadding: '30px',
            centerMode: true,
            focusOnSelect: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <Slider className={styles.slider} {...settings}>
                <div className={styles.slider__item}>
                    <div className={styles.card_title}>
                        01 Ясность / Очевидность
                    </div>
                    <div className={styles.card_text}>
                        UX - процесс определения проблем пользователя и решение этих проблем с целью повышения его
                        удовлетворенности. Улучшение взаимодействия между пользователем и приложением на пути
                        пользователя к цели.
                        <br/>
                        <div style={{fontWeight: 600, fontSize: '18px', marginTop: '5px'}}>Как добиться:</div>
                        <ol>
                            <li>Недвусмысленные формулировки</li>
                            <li>Ссылки ведут себя как ссылки</li>
                            <li>Что-то еще</li>
                        </ol>
                        <img className={styles.image_for_card} src={image} alt={"Пикча"}/>
                    </div>
                </div>

                <div className={styles.slider__item}>
                    <div className={styles.card_title}>
                        02 Последовательность / Консистентность
                    </div>
                    <div className={styles.card_text}>
                        Это означает, что существует некий набор элементов, который не содержит элементов из другого
                        набора по любому условию из этого набора. Другими словами, это означает, что в наборе элементов
                        каждый элемент не принадлежит набору других элементов.
                        В этом случае набор называется несвязанным.
                        <br/>
                        <div style={{fontWeight: 600, fontSize: '18px', marginTop: '5px'}}>Как добиться:</div>
                        <ol>
                            <li>Недвусмысленные формулировки</li>
                            <li>Предложения с простым строением и минимальным количеством придаточных.</li>
                            <li>Что-то еще</li>
                        </ol>
                    </div>
                </div>
                <div className={styles.slider__item}>
                    <div className={styles.card_title}>
                        03 Инклюзивность
                    </div>
                    <div className={styles.card_text}>
                        Это не имеет особого смысла.
                        Мы можем написать все, что угодно.
                        В качестве примера рассмотрим, что мы можем написать следующее:
                        <br/>
                        <div style={{fontWeight: 600, fontSize: '18px', marginTop: '5px'}}>Как добиться:</div>
                        <ol>
                            <li>Недвусмысленные формулировки</li>
                            <li>Предложения с простым строением и минимальным количеством придаточных.</li>
                        </ol>
                    </div>
                </div>
            </Slider>
        );
    }
}


