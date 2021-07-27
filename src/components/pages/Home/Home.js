import Navbar from "../../Navbar";
import {ReactSVG} from "react-svg";

import "./Home.css";

import dots from "../../../assets/dots.svg";
import firstLine from "../../../assets/line1.svg";
import secondLine from "../../../assets/line2.svg";
import thirdLine from "../../../assets/line3.svg";
import fourthLine from "../../../assets/line4.svg";

export default function Home() {
    return (
        <div className="main-page">
            <Navbar className="navbar"/>
            <div className="line-light"/>
            <ReactSVG src={dots} className="dots"/>
            <ReactSVG src={firstLine} className="firstLine"/>
            <ReactSVG src={secondLine} className="secondLine"/>
            <ReactSVG src={thirdLine} className="thirdLine"/>
            <ReactSVG src={fourthLine} className="fourthLine"/>
            <div className="content">
                <div className="header">
                    <h1>
                        Дизайн-система
                    </h1>
                    <p>
                        Эффективный инструмент для разработки и развития цифровых продуктов.
                        Она содержит в себе библиотеку компонентов, информацию об используемых
                        паттернах, проводимых исследованиях и т.д.
                    </p>
                </div>
                <div className="main-title">
                    <span className="green">Что /</span>
                    <br/>
                    <span className="light">зачем /</span>
                    <br/>
                    как
                    <br/>
                    это ?
                </div>
                <div className="points">
                    <div className="point">
                        <div className="num first">01</div>
                        <div className="num-text first">
                            Ускорение <br/>разработки продукта
                        </div>
                        <div className="point-text first">
                            Все компоненты готовы, разработчик
                            не тратит время <br/>на его создание. Каждый компонент легко изменять<br/> и
                            переиспользовать.
                        </div>
                    </div>

                    <div className="point">
                        <div className="num second">02</div>
                        <div className="num-text second">
                            Продуманный<br/>пользовательский<br/> опыт
                        </div>
                        <div className="point-text second">
                            Наши продукты консистентны -
                            спроектированы в одном стиле,<br/> с использованием одниковых паттернов. Это делает
                            продукт <br/>удобным и интуитивно понятным. А еще все знают, что это - UDV!
                        </div>
                    </div>

                    <div className="point">
                        <div className="num third">03</div>
                        <div className="num-text third">
                            <span className="start-padding">Вся информация</span><br/>в
                            быстром доступе
                        </div>
                        <div className="point-text third">
                            Если возникает потребность
                            спроектировать часть интерфейса<br/> без дизайнера - сделать это становится значительно
                            проще.
                        </div>
                    </div>

                    <div className="point">
                        <div className="num fourth">04</div>
                        <div className="num-text fourth">
                            Ускорение обучения и повыешения <br/>общей
                            компетентности
                        </div>
                        <div className="point-text fourth">
                            Ускоряется обучение новых
                            сотрудников и введение в курс дела<br/> подрядчиков. Повышается общая компетентность
                            команды<br/> разработки - среди нас появляются новые T-shaped специалисты.
                        </div>
                    </div>
                </div>
                <div className="footer">
                    По любым вопросам о проектировании интерфейса можно связаться с
                    командой дизайн-системы:
                    <span className="designer">Юля Минуллина</span> / продуктовый дизайнер
                </div>
            </div>
        </div>
    )
}