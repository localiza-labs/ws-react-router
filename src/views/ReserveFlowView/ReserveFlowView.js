import React from 'react';
import {useParams} from "react-router-dom";
import FirstStepView from "./FirstStepView";
import SecondStepView from "./SecondStepView";
import ThirdStepView from "./ThirdStepView";
import ReserveConfirmedView from "./ReserveConfirmedView";
import ReserveFlowProvider from "../../providers/ReserveFlowProvider";

const ReserveFlowView = () => {
    const {carGroupCode} = useParams();

    return (
        <ReserveFlowProvider>
            <h1>Reserva do grupo {carGroupCode}</h1>
            {/*<FirstStepView/>*/}
            {/*<SecondStepView/>*/}
            {/*<ThirdStepView/>*/}
            <ReserveConfirmedView/>
        </ReserveFlowProvider>
    );
};

export default ReserveFlowView;
