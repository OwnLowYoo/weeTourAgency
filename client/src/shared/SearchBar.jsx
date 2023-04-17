import React, {useRef} from 'react';
import './search-bar.css'
import {Col, Form, FormGroup} from "reactstrap";

const SearchBar = () => {

    const locationRef = useRef('')
    const dateRef = useRef(0)
    const maxGroupSizeRef = useRef(0)

    const searchHandler = () => {
        const location = locationRef.current.value
        const date = dateRef.current.value
        const maxGroupSize = maxGroupSizeRef.current.value

        if(location === ''|| date === '' || maxGroupSize === ''){
            return alert ('All fields are required!')
        }
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
                            <input type="text" placeholder="Когда" ref={dateRef}
                                   onFocus={(e) => e.target.type = 'date'}
                                   onBlur={(e) => e.target.type = 'text'}/>
                        </div>
                    </FormGroup>
                    <FormGroup className="d-flex gap-3 form__group form__group-fast">
                        <span>
                            <i className="ri-calendar-fill"></i>
                        </span>
                        <div>
                            <input type="text" placeholder="Обратно" ref={dateRef}
                                   onFocus={(e) => e.target.type = 'date'}
                                   onBlur={(e) => e.target.type = 'text'}
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