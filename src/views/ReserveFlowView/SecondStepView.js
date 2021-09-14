import React, {useContext} from 'react';
import {useHistory} from "react-router-dom";
import AdditionalGrid from "../../components/Additional/AdditionalGrid";
import additionals from '../../assets/json/additionals.json';
import {ReserveFlowContext} from "../../providers/ReserveFlowProvider";

const SecondStepView = () => {
    const history = useHistory();
    const {steps, updateStepValues} = useContext(ReserveFlowContext);
    const currentStepIndex = 1;
    const currentStep = steps[currentStepIndex];

    const onSelect = (values) => {
        updateStepValues(currentStep.name, {additionals: values});
    }

    const next = () => {
        const nextStep = steps[currentStepIndex + 1];
        history.push(nextStep.path);
    }

    const prev = () => {
        const nextStep = steps[currentStepIndex - 1];
        history.push(nextStep.path);
    }

    return (
        <>
            <h2>Adicionais</h2>

            <div className="row">
                <div className="col-md-12 mb-3">
                    <AdditionalGrid
                        selected={currentStep.value.additionals}
                        additionals={additionals}
                        onSelect={onSelect}
                    />
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <div className="d-flex flex-row justify-content-end">

                        <button
                            className="btn btn-light me-3"
                            onClick={prev}
                        >
                            Voltar
                        </button>

                        <button
                            className="btn btn-primary"
                            onClick={next}
                        >
                            Próximo
                        </button>

                    </div>
                </div>
            </div>
        </>
    );
};

export default SecondStepView;
