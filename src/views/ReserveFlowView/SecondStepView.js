import React, {useContext} from 'react';
import AdditionalGrid from "../../components/Additional/AdditionalGrid";
import additionals from '../../assets/json/additionals.json';
import {ReserveFlowContext} from "../../providers/ReserveFlowProvider";

const SecondStepView = () => {
    const {steps, updateStepValues} = useContext(ReserveFlowContext);
    const currentStep = steps[1];

    const onSelect = (values) => {
        updateStepValues(currentStep.name, {additionals: values});
    }

    return (
        <>
            <h2>Adicionais</h2>

            <div className="row">
                <div className="col-md-12 mb-3">
                    <AdditionalGrid
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
                        >
                            Voltar
                        </button>

                        <button
                            className="btn btn-primary"
                            type="submit"
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
