import React, {useContext} from 'react';
import PersonForm from "../../components/PersonForm";
import {ReserveFlowContext} from "../../providers/ReserveFlowProvider";

const ThirdStepView = () => {
    const {steps, updateStepValues, updateStepValidation} = useContext(ReserveFlowContext);
    const currentStep = steps[2];

    const onSubmit = (values) => {
        updateStepValues(currentStep.name, values);
    }

    const onValidChange = (valid) => {
        updateStepValidation(currentStep.name, valid);
    }

    return (
        <>

            <h1>Dados pessoais</h1>

            <PersonForm
                value={currentStep.value}
                onSubmit={onSubmit}
                onValidChange={onValidChange}
            />

        </>
    );
};

export default ThirdStepView;
