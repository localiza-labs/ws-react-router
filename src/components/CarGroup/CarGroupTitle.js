import React from 'react';
import { CarGroupTitleStyled } from './styles';

const CarGroupTitle = ({ carGroup }) => {
  return (
    <CarGroupTitleStyled>
      {`Grupo ${carGroup.code} - ${carGroup.name}`}
    </CarGroupTitleStyled>
  );
};

export default CarGroupTitle;
