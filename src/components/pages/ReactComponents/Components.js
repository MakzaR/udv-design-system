import React from 'react';

import classes from './Components.module.css';

import Navbar from "../../Navbar";

import copy from "./copy.svg";


export default function Components() {
    return (
        <div>
            <Navbar/>
            <div className={classes.container}>
                <div className={classes.left_menu}>
                    <input type="search" placeholder="Поиск" className={classes.search}/>
                    <div className={classes.vertmenu}>
                        <ul>
                            <li>

                                <a className={classes.active, classes.menu_title} href="#">Атомы
                                </a>
                                <input type="checkbox" className={classes.subCat} id={1} defaultChecked="checked"/>
                                <label className={classes.chka} htmlFor={1}/>

                                <ul style={{display: 'none'}}>
                                    <li>
                                        <a href="#" className={classes.menu_sub_title}>Кнопки</a>
                                        <input type="checkbox" className={classes.subCat} id="1.1"
                                               defaultChecked="checked"/>
                                        <img className={classes.chka} htmlFor="1.1"/>
                                        <ul>
                                            <li>
                                                <div style={{
                                                    backgroundColor: '#E3E3E3',
                                                    margin: '0 -28px',
                                                    padding: '0 28px'
                                                }}>
                                                    <a className={classes.menu_options} href="#">MainButton</a>
                                                </div>

                                            </li>
                                            <li>
                                                <a className={classes.menu_options} href="#">SecondaryButton</a>
                                            </li>
                                            <li>
                                                <a className={classes.menu_options} href="#">Link</a>
                                            </li>
                                            <li>
                                                <a className={classes.menu_options} href="#">IconButton</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#" className={classes.menu_sub_title}>Поля</a>
                                        <input type="checkbox" className={classes.subCat} id="1.1"
                                               defaultChecked="checked"/>
                                        <ul>
                                            <li>
                                                <a className={classes.menu_options} href="#">Input</a>
                                            </li>
                                            <li>
                                                <a className={classes.menu_options} href="#">FileInput</a>
                                            </li>
                                            <li>
                                                <a className={classes.menu_options} href="#">Select</a>
                                            </li>
                                            <li>
                                                <a className={classes.menu_options} href="#">MultiSelect</a>
                                            </li>
                                            <li>
                                                <a className={classes.menu_options} href="#">DateInput</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#" className={classes.menu_sub_title}>Поля</a>
                                        <input type="checkbox" className={classes.subCat} id="1.1"
                                               defaultChecked="checked"/>
                                        <ul>
                                            <li>
                                                <a className={classes.menu_options} href="#">Input</a>
                                            </li>
                                            <li>
                                                <a className={classes.menu_options} href="#">FileInput</a>
                                            </li>
                                            <li>
                                                <a className={classes.menu_options} href="#">Select</a>
                                            </li>
                                            <li>
                                                <a className={classes.menu_options} href="#">MultiSelect</a>
                                            </li>
                                            <li>
                                                <a className={classes.menu_options} href="#">DateInput</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className={classes.vertmenu}>
                        <ul>
                            <li>
                                <a className={classes.active, classes.menu_title} href="#">Молекулы
                                </a>
                                <input type="checkbox" className={classes.subCat} id={2}/>
                                <label className={classes.chka} htmlFor={2}/>
                                <ul>
                                    <li>
                                        <a href="#">Пункт меню 2.1</a>
                                    </li>
                                    <li>
                                        <a href="#">Пункт меню 2.2</a>
                                    </li>
                                    <li>
                                        <a href="#">Пункт меню 2.3</a>
                                    </li>
                                    <li>
                                        <a href="#">Пункт меню 2.4</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={classes.content}>
                    <div className={classes.title}>MainButton</div>
                    <div style={{display: 'flex'}}>
                        <p className={classes.text}>import Amount from 'arui-feather/amount';</p>
                        <img src={copy} className={classes.img_copy}/>
                    </div>
                    <div className={classes.sub_title}>Компонент</div>
                    <div className={classes.button}>Главная кнопка</div>
                    <div className={classes.line}/>
                    <div className={classes.code_title}><span
                        style={{color: '#00B98A', textDecoration: 'underline'}}>Код</span> <span
                        style={{marginLeft: '28px'}}>Свойства и методы</span></div>
                    <div className={classes.code_block}>
                            <pre className={classes.code}>{"    "}<span className={classes.blue}>const</span> <span
                                className={classes.purple}>AMOUNT</span> ={"{"}<br/>{"\n"}{"        "}value <span
                                className={classes.purple}>123535</span>,<br/>{"\n"}{"        "}currency: {"{"}<br/>{"\n"}{"            "}code: <span
                                className={classes.green}>'RUR'</span>,<br/>{"\n"}{"            "}minority: <span
                                className={classes.purple}>100</span><br/>{"\n"}{"        "}{"}"}{"\n"}{"    "}{"}"};{"\n"}{"    "}<br/>{"\n"}{"    "}&lt;
                                <span className={classes.purple}>div</span>&gt;
                                <br/>{"\n"}{"        "}{"{"}<br/>{"\n"}{"            "}[<span
                                    className={classes.green}>'s'</span>, <span
                                    className={classes.green}>'m'</span>, <span
                                    className={classes.green}>'1'</span>, <span
                                    className={classes.green}>'xl'</span>].<span className={classes.red}>map</span>(size =&gt;
                                <br/>{"\n"}{"                "}&lt;<span className={classes.purple}>div</span> <span
                                    className={classes.green}>key</span>={"{"} <span
                                    className={classes.purple}>size</span> {"}"}&gt;
                                <br/>{"\n"}{"                    "}&lt;<span
                                    className={classes.red}>Amount</span><br/>{"\n"}{"                        "}<span
                                    className={classes.green}>size</span>={"{"} <span
                                    className={classes.purple}>size</span> {"}"}<br/>{"\n"}{"                        "}<span
                                    className={classes.green}>amount</span>={"{"} <span
                                    className={classes.purple}>AMOUNT</span> {"}"}<br/>{"\n"}{"                    "}/&gt;
                                <br/>{"\n"}{"                "}&lt;/<span className={classes.purple}>div</span>&gt;
                                <br/>{"\n"}{"            "}))<br/>{"\n"}{"        "}{"}"}<br/>{"\n"}{"    "}&lt;/<span
                                    className={classes.purple}>div</span>&gt;<br/>{"\n"}{"    "}</pre>
                    </div>
                </div>
            </div>
        </div>
    );
}
