import React from 'react'
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import MotorsData from '../../data/data.json';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

import './Carousel.scss';

SwiperCore.use([Navigation, Pagination]);

function slideContent(data) {
    return (
        <>
            <h1 className="motor-id text-center m-0">{data.id}</h1>
            <div className="motor-specs-image">
                <img className="motor-image" src={data.image} alt=""/>
                <ul className="motor-specs">
                    <li>
                        <span className="block key-title">Displacement</span>
                        <span className="key-value">{data.specs.displacement}</span>
                    </li>
                    <li>
                        <span className="block key-title">Horse Power</span>
                        <span className="key-value">{data.specs['horse Power']}</span>
                    </li>
                    <li>
                        <span className="block key-title">Torque</span>
                        <span className="key-value">{data.specs.torque}</span>
                    </li>
                    <li>
                        <span className="block key-title">Dry Weight</span>
                        <span className="key-value">{data.specs.dryWeight}</span>
                    </li>
                    <li>
                        <span className="block key-title">Seat Height</span>
                        <span className="key-value">{data.specs.seatHeight}</span>
                    </li>
                    <li>
                        <span className="block key-title">Safety</span>
                        <span className="key-value">{data.specs.safety}</span>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default function Carousel() {
    return (
        <Swiper
            navigation
            pagination={{ clickable: true }}
        >
            {
                MotorsData.map((data, index) => (
                    <SwiperSlide key={`slide-${index}`}>
                        <div className="slide-container">
                            {slideContent(data)}
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}
