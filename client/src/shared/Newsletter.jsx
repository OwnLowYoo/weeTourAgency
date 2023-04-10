import React from 'react';
import './newsletter.css'

import { Container, Row, Col } from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'

const Newsletter = () => {
    return <section className="newsletter">
        <Container>
            <Row>
                <Col lg = '6'>
                    <div className="newsletter__content">
                        <h2>Подпишитесь на нас чтоб получать полезную информацию.</h2>
                        <div className="newsletter__input">
                            <input type="email" placeholder='Введите свой email'/>
                            <button className="btn newsletter_btn">Подписаться</button>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua.</p>
                    </div>
                </Col>
                <Col lg = '6'>
                    <div className="newsletter__img">
                        <img src={maleTourist} alt=""/>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
};

export default Newsletter;