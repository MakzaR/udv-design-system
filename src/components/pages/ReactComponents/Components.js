import React from 'react';

import styles from './Components.module.css';

import Navbar from "../../Navbar";

import copy from "./copy.svg";


export default function Components() {
    return (
        <div className={styles.react_page}>
            <Navbar className={styles.navbar}/>
            <div className={styles.react_content}>
                <div className={styles.left_menu}>
                    <input type="search" placeholder="Поиск" className={styles.search}/>
                    <div className={styles.vertmenu}>
                        <ul>
                            <li>

                                <a className={styles.menu_title} href="#">Атомы
                                </a>
                                <input type="checkbox" className={styles.subCat} id={1} defaultChecked="checked"/>
                                <label className={styles.chka} htmlFor={1}/>

                                <ul style={{display: 'none'}}>
                                    <li>
                                        <a href="#" className={styles.menu_sub_title}>Кнопки</a>
                                        <input type="checkbox" className={styles.subCat} id="1.1"
                                               defaultChecked="checked"/>
                                        <img className={styles.chka} htmlFor="1.1"/>
                                        <ul>
                                            <li>
                                                <div style={{
                                                    backgroundColor: '#E3E3E3',
                                                    margin: '0 -28px',
                                                    padding: '0 28px'
                                                }}>
                                                    <a className={styles.menu_options} href="#">MainButton</a>
                                                </div>

                                            </li>
                                            <li>
                                                <a className={styles.menu_options} href="#">SecondaryButton</a>
                                            </li>
                                            <li>
                                                <a className={styles.menu_options} href="#">Link</a>
                                            </li>
                                            <li>
                                                <a className={styles.menu_options} href="#">IconButton</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#" className={styles.menu_sub_title}>Поля</a>
                                        <input type="checkbox" className={styles.subCat} id="1.1"
                                               defaultChecked="checked"/>
                                        <ul>
                                            <li>
                                                <a className={styles.menu_options} href="#">Input</a>
                                            </li>
                                            <li>
                                                <a className={styles.menu_options} href="#">FileInput</a>
                                            </li>
                                            <li>
                                                <a className={styles.menu_options} href="#">Select</a>
                                            </li>
                                            <li>
                                                <a className={styles.menu_options} href="#">MultiSelect</a>
                                            </li>
                                            <li>
                                                <a className={styles.menu_options} href="#">DateInput</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#" className={styles.menu_sub_title}>Поля</a>
                                        <input type="checkbox" className={styles.subCat} id="1.1"
                                               defaultChecked="checked"/>
                                        <ul>
                                            <li>
                                                <a className={styles.menu_options} href="#">Input</a>
                                            </li>
                                            <li>
                                                <a className={styles.menu_options} href="#">FileInput</a>
                                            </li>
                                            <li>
                                                <a className={styles.menu_options} href="#">Select</a>
                                            </li>
                                            <li>
                                                <a className={styles.menu_options} href="#">MultiSelect</a>
                                            </li>
                                            <li>
                                                <a className={styles.menu_options} href="#">DateInput</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.vertmenu}>
                        <ul>
                            <li>
                                <a className={styles.menu_title} href="#">Молекулы
                                </a>
                                <input type="checkbox" className={styles.subCat} id={2}/>
                                <label className={styles.chka} htmlFor={2}/>
                                <ul>
                                    <li>
                                        <a className={styles.menu_sub_title} href="#">Пункт меню 2.1</a>
                                    </li>
                                    <li>
                                        <a className={styles.menu_sub_title} href="#">Пункт меню 2.2</a>
                                    </li>
                                    <li>
                                        <a className={styles.menu_sub_title} href="#">Пункт меню 2.3</a>
                                    </li>
                                    <li>
                                        <a className={styles.menu_sub_title} href="#">Пункт меню 2.4</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.title}>MainButton</div>
                    <div style={{display: 'flex'}}>
                        <p className={styles.text}>import Amount from 'arui-feather/amount';</p>
                        <img src={copy} className={styles.img_copy}/>
                    </div>
                    <div className={styles.sub_title}>Компонент</div>
                    <div className={styles.button}>Главная кнопка</div>
                    <div className={styles.line}/>
                    <div className={styles.code_title}><span
                        className={styles.code_top}>Код</span> <span
                        style={{marginLeft: '28px'}}>Свойства и методы</span></div>
                    <div className={styles.code_block}>
                            <pre className={styles.code}>{"    "}<span className={styles.blue}>const</span> <span
                                className={styles.purple}>AMOUNT</span> ={"{"}<br/>{"\n"}{"        "}value <span
                                className={styles.purple}>123535</span>,<br/>{"\n"}{"        "}currency: {"{"}<br/>{"\n"}{"            "}code: <span
                                className={styles.green}>'RUR'</span>,<br/>{"\n"}{"            "}minority: <span
                                className={styles.purple}>100</span><br/>{"\n"}{"        "}{"}"}{"\n"}{"    "}{"}"};{"\n"}{"    "}<br/>{"\n"}{"    "}&lt;
                                <span className={styles.purple}>div</span>&gt;
                                <br/>{"\n"}{"        "}{"{"}<br/>{"\n"}{"            "}[<span
                                    className={styles.green}>'s'</span>, <span
                                    className={styles.green}>'m'</span>, <span
                                    className={styles.green}>'1'</span>, <span
                                    className={styles.green}>'xl'</span>].<span
                                    className={styles.red}>map</span>(size =&gt;
                                <br/>{"\n"}{"                "}&lt;<span className={styles.purple}>div</span> <span
                                    className={styles.green}>key</span>={"{"} <span
                                    className={styles.purple}>size</span> {"}"}&gt;
                                <br/>{"\n"}{"                    "}&lt;<span
                                    className={styles.red}>Amount</span><br/>{"\n"}{"                        "}<span
                                    className={styles.green}>size</span>={"{"} <span
                                    className={styles.purple}>size</span> {"}"}<br/>{"\n"}{"                        "}<span
                                    className={styles.green}>amount</span>={"{"} <span
                                    className={styles.purple}>AMOUNT</span> {"}"}<br/>{"\n"}{"                    "}/&gt;
                                <br/>{"\n"}{"                "}&lt;/<span className={styles.purple}>div</span>&gt;
                                <br/>{"\n"}{"            "}))<br/>{"\n"}{"        "}{"}"}<br/>{"\n"}{"    "}&lt;/<span
                                    className={styles.purple}>div</span>&gt;<br/>{"\n"}{"    "}</pre>
                    </div>
                </div>
            </div>
        </div>
    );
}
