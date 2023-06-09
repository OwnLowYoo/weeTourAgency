import React, {useRef} from 'react';
import './search-bar.css'
import {Col, Form, FormGroup} from "reactstrap";

import { BASE_URL } from "../utils/config";

import { useNavigate } from "react-router-dom";

const SearchBar = () => {

    const locationRef = useRef('')
    const distanceRef = useRef(0)
    const maxGroupSizeRef = useRef(0)
    const navigate = useNavigate()

    const searchHandler = async () => {
        const location = locationRef.current.value
        const distance = distanceRef.current.value
        const maxGroupSize = maxGroupSizeRef.current.value

        if(location === ''|| distance === '' || maxGroupSize === ''){
            return alert ('All fields are required!')
        }

        const res = await fetch(`${BASE_URL}/tours/search/getTourBySearch?city=
        ${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`)

        if(!res.ok) alert('Something went wrong')

        const result = await res.json()

        navigate(`/tours/search?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`, {state: result.data})
    }


    return (
        <Col lg = '12'>
            <div className="search__bar">
                <Form className = "d-flex align-items-center gap-3">
                    <FormGroup className="d-flex gap-3 form__group form__group-fast">
                        <span>
                            <i className= "ri-map-pin-line"></i>
                        </span>
                        <div>
                            <input type = "text" placeholder="Откуда?" ref={locationRef}/>
                        </div>
                    </FormGroup>
                    <FormGroup className="d-flex gap-3 form__group form__group-fast">
                        <span>
                            <i className= "ri-map-pin-fill"></i>
                        </span>
                        <div>
                            <input type = "text" placeholder="Куда?" ref={locationRef}/>
                        </div>
                    </FormGroup>
                    <FormGroup className="d-flex gap-3 form__group form__group-fast">
                        <span>
                            <i className= "ri-calendar-line"></i>
                        </span>
                        <div>
                            <input type="text" placeholder="Когда" ref={distanceRef}
                                   onFocus={(e) => e.target.type = 'integer'}
                                   onBlur={(e) => e.target.type = 'integer'}/>
                        </div>
                    </FormGroup>
                    <FormGroup className="d-flex gap-3 form__group form__group-fast">
                        <span>
                            <i className="ri-calendar-fill"></i>
                        </span>
                        <div>
                            <input type="text" placeholder="Обратно" ref={distanceRef}
                                   onFocus={(e) => e.target.type = 'integer'}
                                   onBlur={(e) => e.target.type = 'integer'}
                                   defaultChecked="Обратно" />
                        </div>
                    </FormGroup>
                    <FormGroup className="d-flex gap-3 form__group form__group-last">
                        <span>
                            <i className= "ri-group-line"></i>
                        </span>
                        <div>
                            <input type = "number" placeholder="0" ref={maxGroupSizeRef}/>
                        </div>
                    </FormGroup>
                    <span className="search__icon" type="submit" onClick={searchHandler}>
                        <i className= "ri-search-line"></i>
                    </span>
                </Form>
            </div>
        </Col>
    );
};

export default SearchBar;