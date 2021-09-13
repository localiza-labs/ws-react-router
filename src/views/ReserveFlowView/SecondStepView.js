import React from 'react';
import AdditionalGrid from "../../components/Additional/AdditionalGrid";
import additionals from '../../assets/json/additionals.json';

const SecondStepView = () => {
    return (
        <>
            <h1>Adicionais</h1>

            <div className="row">
                <div className="col-md-12 mb-3">
                    <AdditionalGrid
                        additionals={additionals}
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
