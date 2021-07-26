import React from "react";
import Navbar from "../../Navbar";

import "./Home.css"

export default function Home() {

    return (
        <div className="main-page">
            <Navbar/>
            <div className="line-light"/>
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
                    Тут будет карсивая графика
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