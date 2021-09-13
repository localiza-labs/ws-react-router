import React from 'react';
import carGroups from '../../assets/json/car-groups.json';
import CarGroupsGrid from "../../components/CarGroup/CarGroupsGrid";

function CarGroupsView(){
    return (
        <CarGroupsGrid carGroups={carGroups}/>
    );
};

export default CarGroupsView;
