import React, {Component} from "react";
import Slider from "react-slick";

import "./Cards.css"

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
            <Slider className="slider" {...settings}>
                <div className="slider__item">
                    <div className="card_title">
                        <span className="card_number">01</span> Ясность / Очевидность
                    </div>
                    <div className="card_text">
                        UX - процесс определения проблем пользователя и решение этих проблем с целью повышения его
                        удовлетворенности. Улучшение взаимодействия между пользователем и приложением на пути
                        пользователя к цели.
                        <br/>
                        <div className="how_to_achieve">Как добиться:</div>
                        <div>
                            <div className="card_item">1. Недвусмысленные формулировки.</div>
                            <div className="card_item">2. Ссылки ведут себя как ссылки.</div>
                            <div className="card_item">3. Что-то еще.</div>
                        </div>
                        <img className="image_for_card" src={image} alt={"График"}/>
                    </div>
                </div>

                <div className="slider__item">
                    <div className="card_title">
                        <span className="card_number">02</span> Последовательность / Консистентность
                    </div>
                    <div className="card_text">
                        Использование одинаковых компонентов и одинакового поведения этих компонентов для того, чтобы
                        система была предсказуемой и знакомой для пользователя в любом ее месте.
                        <br/>
                        <div className="how_to_achieve">Как добиться:</div>
                        <div>
                            <div className="card_item"> 1. Создайте гайдлайн с компонентами и придерживайтесь его.</div>
                            <div className="card_item">2. Не меняйте поведение компонента без надобности.</div>
                            <div className="card_item">3. Используйте одни и те же паттерны во всех подобных случаях.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slider__item">
                    <div className="card_title">
                        <span className="card_number">03</span> Инклюзивность
                    </div>
                    <div className="card_text">
                        Доступность интерфейса для людей с ограниченными возможностями - с плохим зрением, сломанной
                        рукой, и так далее.
                        <br/>
                        <div className="how_to_achieve">Как добиться:</div>
                        <div>
                            <div className="card_item">1. Проверяйте интерфейс на цветовую и контрастную доступность.
                            </div>
                            <div className="card_item">2. Используйте читабельные шрифты и их размеры.</div>
                            <div className="card_item">
                                3. Подумайте о том, какие ограничения стоят перед пользователи с разными проблемами.
                            </div>
                            <div className="card_item">
                                4. В мобильных интерфейсах для человека с одной действующей рукой располагайте кнопки
                                так, чтобы до них можно было удобно дотянуться.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slider__item">
                    <div className="card_title">
                        <span className="card_number">04</span> Иерархия
                    </div>
                    <div className="card_text">
                        Структурированность информации и функциональности, акцент на основном, понятность для
                        пользователя - где главное, где второстепенное, а также взаимосвязь объектов друг с другом.
                        <br/>
                        <div className="how_to_achieve">Как добиться:</div>
                        <div>
                            <div className="card_item">1. Используйте достаточно свободного пространства для разделения
                                областей.
                            </div>
                            <div className="card_item">
                                2. Помните, что акценты расставляются как с помощью размера, так и с помощью
                                расположения, а также цвета.
                            </div>
                            <div className="card_item">
                                3. Учитвайте пользовательские сценарии про проектировании информационной архитектуры.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slider__item">
                    <div className="card_title">
                        <span className="card_number">05</span> Подтверждение
                    </div>
                    <div className="card_text">
                        Подтверждайте те действия, которые могут привести к критической ошибке - удаление сущности,
                        например.
                        <br/>
                        <div className="how_to_achieve">Как добиться:</div>
                        <div>
                            <div className="card_item">1. Спрашивайте пользователя, уверен ли он в совершаемом
                                действии.
                            </div>
                            <div className="card_item">2. Указывайте возможные последствия.</div>
                            <div className="card_item">3. Используйте максимально простые и понятные формулировки.</div>
                        </div>
                    </div>
                </div>
                <div className="slider__item">
                    <div className="card_title">
                        <span className="card_number">06</span> Отношение «Гибкость – Юзабилити»
                    </div>
                    <div className="card_text">
                        Чем выше гибкость системы - тем ниже ее юзабилити. Подумайте, нет ли избыточной функциональности
                        в вашей системе.
                        <br/>
                        <div className="how_to_achieve">Как добиться:</div>
                        <div>
                            <div className="card_item">
                                1. Изучайте потребности пользователей - не добавляйте или отказывайтесь от того, в чем
                                нет потребности.
                            </div>
                            <div className="card_item">
                                2. Подумайте, можете ли вы принять очевидные решения за пользователей и оставить ему
                                только то, что действительно важно для него.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slider__item">
                    <div className="card_title">
                        <span className="card_number">07</span> Информативность о состоянии системы
                    </div>
                    <div className="card_text">
                        В случае совершения фоновых действий (которые происходят незаметно для пользователя),
                        информируйте его о состоянии системы. Таким образом, поведение системы будет всегда понятно.
                        <br/>
                        <div className="how_to_achieve">Как добиться:</div>
                        <div>
                            <div className="card_item">
                                1. При сохранении изменений, например, добавьте несколько состояний для кнопки -
                                сохраняет и “готово”, либо “ошибка”.
                            </div>
                            <div className="card_item">
                                2. Если происходит долгий процесс, добавьте прогресс-бар - так пользователь будет знать,
                                что все в порядке и система не зависла.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slider__item">
                    <div className="card_title">
                        <span className="card_number">08</span> Предотвращение ошибок
                    </div>
                    <div className="card_text">
                        Способность системы не дать пользователю допустить ошибку вместо того, чтобы позволить ее
                        допустить, а затем вывести сообщение об ошбке. Такая особенность делает систему дружелюбной по
                        отношению к пользователю.
                        <br/>
                        <div className="how_to_achieve">Как добиться:</div>
                        <div>
                            <div className="card_item">
                                1. Если в поле ввода нельзя вводить, например, кириллицу - заблокируйте ее ввод, а в
                                подсказке под полем напишите, что значение должно содержать только латиницу.
                            </div>
                            <div className="card_item">
                                2. Не добавляйте для выбора (например, в выпадающий список) те варианты, использование
                                которых невозможно в данном контексте.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slider__item">
                    <div className="card_title">
                        <span className="card_number">09</span> Справочная документация
                    </div>
                    <div className="card_text">
                        Наличие справки как по общей функциональности (руководство пользователя), так и по частным
                        неочевидным случаям обязательно для предсказуемой дружелюбной системы.
                        <br/>
                        <div className="how_to_achieve">Как добиться:</div>
                        <div>
                            <div className="card_item">
                                1. В идеале, встроить руководство пользователя в систему, сделать удобную навигацию.
                            </div>
                            <div className="card_item">
                                2. Возле каждой неочевидной, сложной функциональности показывать тултипы / хинты. У
                                полей ввода можно использовать подсказки под заголовком.
                            </div>
                            <div>
                                3. Используйте элементы онбординга, обучайте своих новых пользователей.
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        );
    }
}


