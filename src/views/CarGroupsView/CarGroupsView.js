import React from 'react';
import { useHistory } from 'react-router-dom';

import carGroups from '../../assets/json/car-groups.json';
import CarGroupsGrid from "../../components/CarGroup/CarGroupsGrid";

function CarGroupsView(){
    const history = useHistory();

    const reserve = (carGroupCode) => {
        history.push(`/fluxo-reserva/${carGroupCode}`);
    }

    return (
        <CarGroupsGrid
            carGroups={carGroups}
            onReserve={reserve}
        />
    );
}

export default CarGroupsView;
