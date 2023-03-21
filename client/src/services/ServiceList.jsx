import React from 'react';
import ServiceCard from "./ServiceCard";

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'
import {Col} from "reactstrap";

const servicesData = [
    {
        imgUrl: weatherImg,
        title: "Calculate Weather",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
        imgUrl: guideImg,
        title: "Best Tour Guide",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
        imgUrl: customizationImg,
        title: "Customization",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
]
const ServiceList = () => {
    return (
        <>
        {servicesData.map((item, index) =>(
            <Col lg ="3" key={index}>
                <ServiceCard item = {item} />
            </Col>
            ))}
            </>
);
};

export default ServiceList;