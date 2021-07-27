import Navbar from "../../Navbar";
import {ReactSVG} from "react-svg";

import styles from "./Home.module.css";

import dots from "../../../assets/dots.svg";
import firstLine from "../../../assets/line1.svg";
import secondLine from "../../../assets/line2.svg";
import thirdLine from "../../../assets/line3.svg";
import fourthLine from "../../../assets/line4.svg";

export default function Home() {
    return (
        <div className={styles.main_page}>
            <Navbar className={styles.navbar}/>
            <div className={styles.line_light}/>
            <ReactSVG src={dots} className={styles.dots}/>
            <ReactSVG src={firstLine} className={styles.firstLine}/>
            <ReactSVG src={secondLine} className={styles.secondLine}/>
            <ReactSVG src={thirdLine} className={styles.thirdLine}/>
            <ReactSVG src={fourthLine} className={styles.fourthLine}/>
            <div className={styles.home_content}>
                <div className={styles.header}>
                    <h1>
                        Дизайн-система
                    </h1>
                    <p>
                        Эффективный инструмент для разработки и развития цифровых продуктов.
                        Она содержит в себе библиотеку компонентов, информацию об используемых
                        паттернах, проводимых исследованиях и т.д.
                    </p>
                </div>
                <div className={styles.main_title}>
                    <span className={styles.green}>Что /</span>
                    <br/>
                    <span className={styles.light}>зачем /</span>
                    <br/>
                    как
                    <br/>
                    это ?
                </div>
                <div className={styles.points}>
                    <div className={styles.point}>
                        <div className={`${styles.num} ${styles.first}`}>01</div>
                        <div className={`${styles.num_text} ${styles.first}`}>
                            Ускорение <br/>разработки продукта
                        </div>
                        <div className={`${styles.point_text} ${styles.first}`}>
                            Все компоненты готовы, разработчик
                            не тратит время <br/>на его создание. Каждый компонент легко изменять<br/> и
                            переиспользовать.
                        </div>
                    </div>

                    <div className={styles.point}>
                        <div className={`${styles.num} ${styles.second}`}>02</div>
                        <div className={`${styles.num_text} ${styles.second}`}>
                            Продуманный<br/>пользовательский<br/> опыт
                        </div>
                        <div className={`${styles.point_text} ${styles.second}`}>
                            Наши продукты консистентны -
                            спроектированы в одном стиле,<br/> с использованием одниковых паттернов. Это делает
                            продукт <br/>удобным и интуитивно понятным. А еще все знают, что это - UDV!
                        </div>
                    </div>

                    <div className={styles.point}>
                        <div className={`${styles.num} ${styles.third}`}>03</div>
                        <div className={`${styles.num_text} ${styles.third}`}>
                            <span className={styles.start_padding}>Вся информация</span><br/>в
                            быстром доступе
                        </div>
                        <div className={`${styles.point_text} ${styles.third}`}>
                            Если возникает потребность
                            спроектировать часть интерфейса<br/> без дизайнера - сделать это становится значительно
                            проще.
                        </div>
                    </div>

                    <div className={styles.point}>
                        <div className={`${styles.num} ${styles.fourth}`}>04</div>
                        <div className={`${styles.num_text} ${styles.fourth}`}>
                            Ускорение обучения и повыешения <br/>общей
                            компетентности
                        </div>
                        <div className={`${styles.point_text} ${styles.fourth}`}>
                            Ускоряется обучение новых
                            сотрудников и введение в курс дела<br/> подрядчиков. Повышается общая компетентность
                            команды<br/> разработки - среди нас появляются новые T-shaped специалисты.
                        </div>
                    </div>
                </div>
                <div className={styles.footer}>
                    По любым вопросам о проектировании интерфейса можно связаться с
                    командой дизайн-системы:
                    <span className={styles.designer}>Юля Минуллина</span> / продуктовый дизайнер
                </div>
            </div>
        </div>
    )
}