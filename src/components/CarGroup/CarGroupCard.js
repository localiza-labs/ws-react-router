import React from 'react';

import CarGroupCarousel from './CarGroupCarousel';
import CarGroupTitle from './CarGroupTitle';
import { CarGroupCardStyled } from './styles';

const CarGroupCard = ({
                          carGroup,
                          onReserve = () => {},
                      }) => {
    return (
        <CarGroupCardStyled>
            <CarGroupTitle carGroup={carGroup} />

            <CarGroupCarousel vehicles={carGroup.vehicles} />

            <div className="disclaimer">
                <div>Sua reserva garante um dos carros desse grupo.</div>
                <div>Modelo sujeito à disponibilidade da agência.</div>
            </div>

            <button
                className="btn btn-lg btn-primary w-100"
                onClick={() => onReserve(carGroup.code)}
            >
                Reserve agora
            </button>
        </CarGroupCardStyled>
    );
};

export default CarGroupCard;
