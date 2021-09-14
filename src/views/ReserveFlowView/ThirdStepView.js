import React, {useContext} from 'react';
import {useHistory} from "react-router-dom";

import PersonForm from "../../components/PersonForm";
import {ReserveFlowContext} from "../../providers/ReserveFlowProvider";

const ThirdStepView = () => {
    const history = useHistory();
    const {steps, updateStepValues, updateStepValidation} = useContext(ReserveFlowContext);
    const currentStepIndex = 2;
    const currentStep = steps[currentStepIndex];

    const onSubmit = (values) => {
        updateStepValues(currentStep.name, values);

        history.push('/confirmacao')
    }

    const onValidChange = (valid) => {
        updateStepValidation(currentStep.name, valid);
    }

    const prev = () => {
        const nextStep = steps[currentStepIndex - 1];
        history.push(nextStep.path);
    }

    return (
        <>

            <h2>Dados pessoais</h2>

            <PersonForm
                value={currentStep.value}
                onSubmit={onSubmit}
                onValidChange={onValidChange}
            >
                <button
                    className="btn btn-light me-3"
                    onClick={prev}
                >
                    Voltar
                </button>
            </PersonForm>

        </>
    );
};

export default ThirdStepView;
