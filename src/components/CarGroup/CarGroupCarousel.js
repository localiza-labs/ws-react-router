import React from 'react';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { CarGroupCarouselStyled } from './styles';

SwiperCore.use([Pagination]);

const CarGroupCarousel = ({ vehicles }) => {
  return (
    <CarGroupCarouselStyled>
      <Swiper slidesPerView={1} pagination={{ clickable: true }}>
        {vehicles.map((vehicle) => (
          <SwiperSlide key={vehicle.name}>
            <img
                className="vehicle-image"
                alt={vehicle.name}
                src={vehicle.urlImage}
            />

            <div className="vehicle-name">{vehicle.name}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </CarGroupCarouselStyled>
  );
};

export default CarGroupCarousel;
