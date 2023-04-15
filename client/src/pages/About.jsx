import React, {useState, useEffect} from 'react';
import CommonSection from "../shared/CommonSection";

import '../styles/about.css'

const Tours = () => {

    const [pageCount, setPageCount] = useState(0)
    const [page, setPage] = useState(0)

    useEffect(() =>{

        const pages = Math.ceil(5/4)
        setPageCount(pages)
    }, [page])

    return (
        <>
            <CommonSection title = {"О КОМПАНИИ"} />
            <section className="our__team pb6">
                <div className="container">
                    <p className="paragraph">
                        <i>
                            <b>
                                <span className="span__title">
                                    «Жизнь во время путешествия – это мечта в чистом виде!»
                                </span>
                            </b>
                        </i>
                    </p>
                    <p className="paragraph"></p>
                    <p align="right" className="paragraph"></p>
                    <p align="right"> Агата Кристи </p>
                    <p>
                        <i>
                            <span className="span__title2">
                                <b>
                                    <span className="span__text">
                                        Мы позаботимся о том,
                                        чтобы Вашу мечту ничто не испортило!
                                    </span>
                                </b>
                            </span>
                        </i>
                    </p>
                    <p align="center">
                        <span className="span__text">...</span>
                    </p>
                    <b>
                    <span className="span__text2">
                        "WEE" – туристическое агентство в Гродно, которое работает
                        по всем областям Республики Беларусь.
                    </span>
                    </b>
                    <p className="paragraph__text">
                        На сегодняшний день компания предоставляет туристические услуги
                        по направлениям: авиатуры, автобусные туры, визовая поддержка,
                        корпоративный отдых. Кроме международных направлений компания занимается
                        организацией отдыха в Беларуси как для местных, так и иностранных граждан.
                        За активное продвижение внутреннего туризма
                        <b> «WEE» </b>
                        была награждена многочисленными грамотами и благодарственными письмами.
                    </p>
                    <p>
                        <br/>
                    </p>

                    <p>
                        <b>
                            <span className="span__text2">
                                ТОП-5 причин выбрать туристическое агентство «WEE»:
                            </span>
                        </b>
                        <br/>
                    </p>
                    <b>
                        <span className="span__text">
                            1.  Индивидуальный подход к каждому Клиенту
                        </span>
                    </b>
                    <p className="paragraph__text2">
                        Наши менеджеры по туризму подберут тур, который действительно
                        будет соответствовать Вашим запросам. Компания профессионально
                        обучает своих сотрудников и отправляет не только на семинары, но
                        и в рекламно-информационные туры, благодаря которым менеджер способен
                        рассказать Клиенту обо всех тонкостях тура.
                    </p>
                    <br/>

                    <div>
                        <b>
                        <span className="span__text">
                            2.  Интересные предложения и выгодные условия
                        </span>
                        </b>
                    </div>
                    <p className="paragraph__text2">
                        Благодаря сотрудничеству компании со многими надежными туроператорами мы сможем
                        подобрать тур в любую точку мира по привлекательной цене. Интересует отдых в
                        Беларуси? Мы подготовили большое многообразие маршрутов для того чтобы удивить
                        отечественной красотой природы.
                    </p>
                    <br/>

                    <div>
                        <b>
                        <span className="span__text">
                            3.  Надежность
                        </span>
                        </b>
                    </div>
                            <p className="paragraph__text2">
                                Наша компания работает на туристическом рынке с 2008 года. За продолжительный
                                срок работы мы стали одним из лидирующих операторов в области въездного туризма
                                и в организации путешествий. Сегодня нашими партнерами являются крупнейшие туристические
                                компании Литвы, Польши, Латвии, Узбекистана и пр.
                            </p>
                    <br/>

                    <div>
                        <b>
                        <span className="span__text">
                            4.  Туристическая компания №1
                        </span>
                        </b>
                    </div>
                    <p className="paragraph__text2">
                        По итогам работы за 2021 г. и 2022 г.
                    <b>
                        «WEE»
                    </b>
                    заняла лидирующее место в Республике Беларусь.
                    </p>
                    <br/>
                    <div>
                        <b>
                        <span className="span__text">
                            5.  Организация тура "под ключ"
                        </span>
                        </b>
                    </div>
                    <p className="paragraph__text2">
                        Наша компания занимается всем: от визовой поддержки до
                        организации поездки. От предоставление трансфера до встречи
                        группы. От постоянной информационной поддержки до раннего
                        бронирования.&nbsp; Наши менеджеры с Вами на связи 24/7.&nbsp;
                    </p>

                    <p className="paragraph__text2">
                        <b>«WEE» </b>
                        использует современные технологии последнего поколения, чтобы
                        сделать выбор,&nbsp; бронирование и оплату путешествий максимально
                        приятным, удобным и быстрым.
                    </p>
                    <p>
                        <br/>
                    </p>

                    <p>
                        <b>
                            <span className="span__text">
                                15 лет работы в сфере туризма
                            </span>
                        </b>
                    </p>
                    <b>
                        <span className="span__text"></span>
                    </b>
                    <p>
                    <b>
                        <span className="span__text">
                            Более 30 000 счастливых клиентов
                        </span>
                    </b>
                    </p>
                    <b>
                        <span className="span__text"></span>
                    </b>
                    <p>
                        <b>
                            <span className="span__text">	Договора со всеми туроператорами Беларуси,
                                России и Польши</span>
                        </b>
                    </p>
                    <p>
                        <br/>
                    </p>
                    <p className="paragraph">
                        <span className="span__text2">
                            &nbsp;
                        </span>
                        <b className="paragraph">
                            <i>
                                <span className="span__text2">
                                    С нами отдых как исскуство!
                                </span>
                            </i>
                        </b>
                        <b className="paragraph">
                            <i>
                                <span className="span__text2">
                                    &nbsp;
                                </span>
                            </i>
                        </b>
                    </p>
                    <div className="row">
                        <div className="col-12 col-sm-6 col-lg-4 center about-info"></div>
                    <br/>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Tours;