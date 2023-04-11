import React from 'react';
import "./footer.css";

import {Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png"

const quick__links = [
    {
        path:'/home',
        display:'Домой'
    },
    {
        path:'/about',
        display:'Мы'
    },
    {
        path:'/tours',
        display:'Туры'
    },
];

const quick__links2 = [
    {
        path:'/gallery',
        display:'Галерея'
    },
    {
        path:'/login',
        display:'Войти'
    },
    {
        path:'/register',
        display:'Регистрация'
    },
]


const Footer = () => {

    const year = new Date().getFullYear()
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg = "3">
                        <div className="logo">
                            <img src={logo} alt=""/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua.</p>

                            <div className="social__links d-flex align-items-center gap-4">
                            <span>
                                <Link to='#'><i className="ri-youtube-line"></i> </Link>
                            </span>
                                <span>
                                <Link to='#'><i className="ri-github-fill"></i> </Link>
                            </span>
                                <span>
                                <Link to='#'><i className="ri-facebook-circle-line"></i> </Link>
                            </span>
                                <span>
                                <Link to='#'><i className="ri-instagram-line"></i> </Link>
                            </span>
                            </div>
                        </div>
                    </Col>

                    <Col lg='3'>
                        <h5 className="footer__link-title">Изучение</h5>
                        <ListGroup className="footer__quick-links">
                            {
                                quick__links.map((item,index) => (
                                    <ListGroupItem key = {index} className="ps-0 border-0">
                                        <Link to={item.path}>{item.display}</Link>
                                    </ListGroupItem>
                                ))
                            }
                        </ListGroup>
                    </Col>
                    <Col lg = '3'>
                        <h5 className="footer__link-title">Быстрые ссылки</h5>
                        <ListGroup className="footer__quick-links">
                            {
                                quick__links2.map((item,index) => (
                                    <ListGroupItem key = {index} className="ps-0 border-0">
                                        <Link to={item.path}>{item.display}</Link>
                                    </ListGroupItem>
                                ))
                            }
                        </ListGroup>
                    </Col>
                    <Col lg = '3'>
                        <h5 className="footer__link-title">Контакты</h5>
                        <ListGroup className="footer__quick-links">
                            <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                                <h6 className="mb-0 d-flex align-items-center gap-2">
                                    <span><i className="ri-map-pin-line"></i></span>
                                    Адрес:
                                </h6>
                                <p className="mb-0">Беларусь, Гродно</p>
                            </ListGroupItem>
                            <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                                <h6 className="mb-0 d-flex align-items-center gap-2">
                                    <span>
                                        <i className="ri-mail-line"></i>
                                    </span>
                                    Email:
                                </h6>
                                <p className="mb-0">BelgOkstak@gmail.com</p>
                            </ListGroupItem>
                            <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                                <h6 className="mb-0 d-flex align-items-center gap-2">
                                    <span><i className="ri-phone-fill"></i></span>
                                    Телефон:
                                </h6>

                                <p className="mb-0">+375292852411</p>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>

                    <Col lg="12" className="text-center pt-5">
                        <p className="copyright">
                            Copyright {year}, design and develop by SAYAMA.
                            All rights reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;