import React from 'react';
import CommonSection from "../shared/CommonSection";
import {Col, Container, Row} from "reactstrap";
import SearchBar from "../shared/SearchBar";
import tourData from "../assets/data/tours";
import TourCard from "../shared/TourCard";
import Newsletter from "../shared/Newsletter";

const Cart = () => {

    return (
        <>
            <CommonSection title = {"Корзина"} />
            <section>
                <Container>
                    <Row>

                    </Row>
                </Container>
            </section>

        </>
    );
};


export default Cart;