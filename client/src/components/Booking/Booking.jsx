import React,{useState} from 'react';
import './booking.css'
import {Button, Form, FormGroup, ListGroup, ListGroupItem} from "reactstrap";

import {useNavigate} from "react-router-dom";


const Booking = ({tour,avgRating}) => {

    const {price, reviews} = tour
    const navigate = useNavigate()

    const [credentials, setCredentials] = useState({
        userId: '01',
        userEmail:'example@gmail.com',
        fullName: '',
        phone:'',
        guestSize:1,
        bookAt:''
    })

    const handleChange = e =>{
        setCredentials(prev=>({...prev, [e.target.id]:e.target.value}))
    };

    const serviceFee = 10
    const totalAmount = Number(price) * Number(credentials.guestSize) * Number(serviceFee)

    const handleClick = e => {
        e.preventDefault();
        navigate('/thank-you')
    }

    return (
        <div className="booking">
            <div className="booking__top d-flex align-items-center justify-content-between">
                <h3>
                    ${price} <span>/с человека</span>
                </h3>
                <span className="tour__rating d-flex align-items-center ">
                    <i className="ri-star-s-fill"></i>
                    {avgRating === 0 ? null :
                    avgRating} ({reviews?.length})
                </span>
            </div>

            {/* ============= booking form start =============*/}
            <div className="booking__form">
                <h5>Информация</h5>
                <Form className="booking__info-form" onSubmit={handleClick}>
                    <FormGroup>
                        <input type="text"
                               placeholder="ФИО"
                               id="fullName"
                               required
                               onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <input type="number"
                               placeholder="Номер телефона"
                               id="phone"
                               required
                               onChange={handleChange} />
                    </FormGroup>
                    <FormGroup className="d-flex align-items-center gap-3">
                        <input
                            type="date"
                            placeholder=""
                            id="bookAt"
                            required
                            onChange={handleChange} />
                        <input
                            type="number"
                            placeholder="Людей"
                            id="guestSize"
                            required
                            onChange={handleChange} />
                    </FormGroup>
                </Form>
            </div>
            {/* ============= booking form end =============*/}

            {/* ============= booking bottom start =============*/}
            <div className="booking__bottom">
                <ListGroup>
                    <ListGroupItem className="border-0 px-0">
                        <h5 className="d-flex align-items-center gap-1">
                            {price} <i className="ri-close-line"></i> 1 человек
                        </h5>
                        <span>${price}</span>
                    </ListGroupItem>
                    <ListGroupItem className="border-0 px-0">
                        <h5>Обслуживание</h5>
                        <span> ${serviceFee}</span>
                    </ListGroupItem>
                    <ListGroupItem className="border-0 px-0 total">
                        <h5>Итог</h5>
                        <span>${totalAmount}</span>
                    </ListGroupItem>
                </ListGroup>

                <Button className="btn primary__btn w-100 mt-4" onClick={handleClick}>В корзину</Button>
            </div>


        </div>
    );
};

export default Booking;