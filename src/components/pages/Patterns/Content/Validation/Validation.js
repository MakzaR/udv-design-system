import React from "react";
import styles from './Validation.module.css';

export default function Validation() {
    const ValidationPage = [
        {
            id: 1,
            head: '1. Блокировка ввода недопустимых символов.',
            inf: ' Мы совмещаем ее с подсказкой под полем: это не просто предотвращает ошибку, но еще и ' +
                'информирует пользователя о том, какие действия для него недоступны. Например, если ' +
                'заблокирован ввод кириллицы, то в подсказке - значение должно содержать только латинские ' +
                'символы и цифры. '
        },
        {
            id: 2,
            head: '2. Подсказка под полем.',
            inf: 'Эта информация - требование к прохождению валидации. Если пользователем не будут ' +
                'соблюдены эти условия, валидация не пройдет, под полем появится текст ошибки вместо' +
                ' подсказки. От предыдущего пункта отличается отсутствием заблокированных символов.'
        },
        {
            id: 3,
            head: '3. Подсказка над полем.',
            inf: 'Справочная информация над полем, под заголовком - если пользователем не будут соблюдены ' +
                'эти условия, ничего не сломается, но система может работать несколько неожиданно для ' +
                'пользователя. Например, выберите поле для связи с источником в формате дата.'
        },
        {
            id: 4,
            head: '4. Текст ошибки.',
            inf: 'Появляется после того, как пользователь совершил ошибку и ушел с поля ввода. Если ' +
                'валидация по потере фокуса невозможна - используется валидация по отправке формы. ' +
                'Например - это поле обязательно для заполнения.'
        }
    ]

    return (
        <div className={styles.content}>
            <div className={styles.preInfo}>
                При валидации мы используем 4 паттерна, это помогает нам показать пользователю,
                где он совершил ошибку, а где мы предупреждем о возможности ее совершения.
            </div>
            <div className={styles.info}>
                <div className={styles.paragraph}>
                    <div className={styles.head}>
                        {ValidationPage[0].head}
                    </div>
                    <br/>
                    {ValidationPage[0].inf}
                    <br/>
                    <br/>
                    <div>
                        <span className={styles.head}>ИД</span> <span className={styles.blue}>*</span>
                        <div className={styles.entryField0}>|</div>
                        <div className={styles.entryFieldInfo}>
                            Значение должно содержать только латинские символы и цифры
                        </div>
                    </div>
                </div>

                <div className={styles.paragraph}>
                    <div className={styles.head}>
                        {ValidationPage[1].head}
                    </div>
                    <br/>
                    {ValidationPage[1].inf}
                    <br/>
                    <br/>
                    <div>
                        <span className={styles.head}>ИД</span> <span className={styles.blue}>*</span>
                        <div className={styles.entryField0}>|</div>
                        <div className={styles.entryFieldInfo}>
                            Значение должно содержать только латинские символы и цифры
                        </div>
                    </div>
                </div>

                <div className={styles.paragraph}>
                    <div className={styles.head}>
                        {ValidationPage[2].head}
                    </div>
                    <br/>
                    {ValidationPage[2].inf}
                    <br/>
                    <br/>
                    <span className={styles.head}>Поле из источника данных</span> <span className={styles.blue}>*</span>
                    <br/>
                    <div className={styles.comment}>*В списке доступны поля с типом: “Дата”. Введенное пользователем
                        значение
                        будет сохранено в
                        выбранное поле контекста.
                    </div>
                    <div className={styles.entryField2}>
                        <span className={styles.text}>
                            Не выбрано
                        </span>
                        <svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 8.05371L9.33013 0.530218L0.669873 0.530218L5 8.05371Z" fill="#4A4A4A"/>
                        </svg>
                    </div>
                </div>

                <div className={styles.paragraph}>
                    <div className={styles.head}>
                        {ValidationPage[3].head}
                    </div>
                    <br/>
                    {ValidationPage[3].inf}
                    <br/>
                    <br/>
                    <span className={styles.head}>Повторите пароль</span> <span className={styles.blue}>*</span>
                    <div className={styles.entryField3}>|</div>
                    <div className={styles.mistake}>Пароли не совпадают</div>
                </div>
            </div>
        </div>
    )
}
