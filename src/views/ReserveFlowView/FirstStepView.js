import React, {useContext} from 'react';
import QuotationForm from "../../components/QuotationForm";
import {ReserveFlowContext} from "../../providers/ReserveFlowProvider";

const FirstStepView = () => {
    const {steps, updateStepValues, updateStepValidation} = useContext(ReserveFlowContext);
    const currentStep = steps[0];

    const onSubmit = (values) => {
        updateStepValues(currentStep.name, values);
    }

    const onValidChange = (valid) => {
        updateStepValidation(currentStep.name, valid);
    }

    return (
        <>
            <h2>Dados da reserva</h2>
            <QuotationForm
                value={currentStep.value}
                onSubmit={onSubmit}
                onValidChange={onValidChange}
            />
        </>
    );
};

export default FirstStepView;
