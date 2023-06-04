import React from 'react';
import CommonSection from "../shared/CommonSection";
import {Col, Container, Row} from "reactstrap";
import tourData from "../assets/data/tours";
import TourCardCart from "../shared/TourCardCart";
import Newsletter from "../shared/Newsletter";
import "../styles/cart.css"

const Cart = () => {

    return (
        <>
            <CommonSection title={"КОРЗИНА"} />
            <section>
                <Container>
                    <Row>
                    </Row>
                </Container>
            </section>
            <section className="pt-0">
                <Container>
                    <Row>
                        {tourData ?.map(tour => (
                            <Col lg="12" className="mb-4" key={tour.id}>
                                <TourCardCart tour={tour} className="tour__card2" />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
            <Newsletter />
        </>
    );
};


export default Cart;
