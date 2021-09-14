import React from 'react';
import FirstStepView from "./FirstStepView";
import SecondStepView from "./SecondStepView";
import ThirdStepView from "./ThirdStepView";
import ReserveConfirmedView from "./ReserveConfirmedView";
import ReserveFlowProvider from "../../providers/ReserveFlowProvider";

const ReserveFlowView = () => {
    return (
        <ReserveFlowProvider>
            {/*<FirstStepView/>*/}
            {/*<SecondStepView/>*/}
            {/*<ThirdStepView/>*/}
            <ReserveConfirmedView/>
        </ReserveFlowProvider>
    );
};

export default ReserveFlowView;
