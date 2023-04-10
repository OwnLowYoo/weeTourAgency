import React from 'react';
import '../styles/home.css'

import {Container, Row, Col} from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import experienceImg from '../assets/images/experience.png'

import Subtitle from "../shared/Subtitle";

import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../components/image-gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonials"
import Newsletter from "../shared/Newsletter";
const Home = () => {
    return (
        <>

            {/* ======= hero section start ======= */}
       <section>
           <Container>
           <Row>
               <Col lg='6'>
               <div className="hero__content">
                   <div className="hero__subtitle d-flex align-items-center">
                   <Subtitle subtitle={'Знай, прежде чем отправишься'}/>
                   <img src={worldImg} alt = "" />
               </div>
                   <h1>Путешествия открывают двери для создания
                   <span className="highlight"> воспоминаний</span>
                   </h1>
                   <p>
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                       sed do eiusmod tempor incididunt ut labore et dolore
                       magna aliqua. Ut enim ad minim veniam, quis nostrud
                       exercitation ullamco laboris nisi ut aliquip ex ea
                       commodo consequat. Duis aute irure dolor in reprehenderit
                       in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                       Excepteur sint occaecat cupidatat non proident, sunt in culpa
                       qui officia deserunt mollit anim id est laborum.
                   </p>
               </div>
               </Col>
               <Col lg = '2'>
                   <div className="hero__img-box">
                       <img src={heroImg} alt=""/>
                   </div>
               </Col>
               <Col lg = '2'>
                   <div className="hero__img-box mt-4">
                       <video src={heroVideo} alt="" controls/>
                   </div>
               </Col>
               <Col lg = '2'>
                   <div className="hero__img-box mt-5">
                       <img src={heroImg02} alt=""/>
                   </div>
               </Col>
               <SearchBar />
           </Row>
               </Container>
       </section>
            {/* ======= hero section end ======= */}
            <section>
                <Container>
                <Row>
                    <Col lg='3'>
                        <h5 className="services__subtitle">С чем мы помогаем</h5>
                        <h2 className="services__title">Мы предлагаем наши лучшие услуги</h2>
                    </Col>
                    <ServiceList />
                </Row>
                </Container>
            </section>

            {/* ======= featured tour section start ======= */}
            <section>
                <Container>
                    <Row>
                        <Col lg="12" className="mb-5">
                            <Subtitle subtitle={"Изучите"} />
                            <h2 className="featured__tour-title">Наши популярные туры</h2>
                        </Col>
                        <FeaturedTourList />
                    </Row>
                </Container>
            </section>
            {/* ======= featured tour section end ======= */}

            {/* ======= experience section end ======= */}
            <section>
                <Container>
                    <Row>
                        <Col lg="6">
                            <div className="experience__content">
                                <Subtitle subtitle={"Опыт"} />

                                <h2>
                                    Используя весь наш опыт <br/> мы обслужим вас
                                </h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    <br/>
                                    Quas aliquam, hic tempora iventore suscipit unde.
                                </p>
                            </div>

                            <div className="counter__wrapper d-flex align-items-center gap-5">
                                <div className="counter__box">
                                    <span>12тыс+</span>
                                    <h6>Успешных туров</h6>
                                </div>
                            <div className="counter__box">
                                    <span>2тыс+</span>
                                    <h6>Постоянных клиентов</h6>
                                </div>
                            <div className="counter__box">
                                    <span>15</span>
                                    <h6>Лет опыта</h6>
                                </div>
                            </div>
                        </Col>
                        <Col lg="6">
                            <div className="experience__img">
                                <img src={experienceImg} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* ======= experience section end ======= */}

            {/* ======= gallery section start ======= */}
            <section>
                <Container>
                    <Row>
                        <Col lg="12">
                            <Subtitle subtitle={'Галерея'}/>
                            <h2 className="gallery__title">
                                Посетите галерею экскурсий наших клиентов
                            </h2>
                        </Col>
                        <Col lg='12'>
                            <MasonryImagesGallery />
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* ======= gallery section end ======= */}

            {/* =========== testimonial section start =========== */}
            <section>
                <Container>
                    <Col lg = '12'>
                        <Subtitle subtitle={'Фанаты любят нас'} />
                        <h2 className="testimonial__title">Что говорят о нас наши фанаты</h2>
                    </Col>
                    <Col lg='12'>
                        <Testimonials />
                    </Col>
                </Container>
            </section>
            {/* =========== testimonial section end =========== */}
            <Newsletter />
       </>
    )
};

export default Home;