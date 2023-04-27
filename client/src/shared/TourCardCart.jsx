import React from 'react';
import {Card, CardBody} from "reactstrap";
import {Link} from "react-router-dom";
import calculateAvgRating from "../utils/avgRating";

import "./tour-card-cart.css"

const TourCard = ({ tour }) => {
    const { id, title, city, photo, price, featured, reviews } = tour;
    const { totalRating, avgRating } = calculateAvgRating(reviews);

    return (
        <div className="tour__card2">
            <Card>
                <div className="d-flex">
                    <div className="tour__img2 mr-3">
                        <img src={photo} alt="tour_img" />
                        {featured && <span>Популярные</span>}
                    </div>
                    <div className="card__info2">
                        <div className="card__top mb-3 d-flex align-items-center justify-content-between">
                            <h5 className="tour__title2 mb-0">
                                <Link to={`/tours/${id}`}>{title}</Link>
                            </h5>
                            <span className="tour__rating2 d-flex align-items-center gap-1">
                <i className="ri-star-s-fill"></i>{" "}
                                {avgRating === 0 ? null : avgRating}
                                {totalRating === 0 ? (
                                    "Нет рейтинга"
                                ) : (
                                    <span>({reviews.length})</span>
                                )}
              </span>
                        </div>
                        <div className="card__bottom2 d-flex align-items-center justify-content-between">
              <span className="tour__location2 d-flex align-items-center gap-1">
                <i className="ri-map-pin-line"></i> {city}
              </span>
                            <h5>
                                ${price} <span> /с человека</span>
                            </h5>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
};


export default TourCard;