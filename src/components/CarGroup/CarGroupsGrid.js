import React from 'react';
import CarGroupCard from './CarGroupCard';
import { CarGroupsGridStyled } from './styles';


const CarGroupsGrid = ({ carGroups, onReserve }) => {
  return (
    <CarGroupsGridStyled>
      {carGroups.map((carGroup) => (
        <CarGroupCard
            key={carGroup.code}
            carGroup={carGroup}
            onReserve={onReserve}
        />
      ))}
    </CarGroupsGridStyled>
  );
};

export default CarGroupsGrid;
