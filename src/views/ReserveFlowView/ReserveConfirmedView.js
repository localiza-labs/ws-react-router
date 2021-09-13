import React from 'react';
import successCheck from '../../assets/svg/success.svg';
import {ConfirmationCode} from "./styles";

const ReserveConfirmedView = ({firstName = 'Joe', lastName = 'Doe'}) => {
    return (
        <div className="alert alert-secondary">
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center">
                    <img src={successCheck} alt="ícone de sucesso"/>
                </div>
            </div>

            <div className="row text-center">
                <div className="col-md-12">
                    <h1>Reserva confirmada</h1>
                </div>

                <div className="col-md-12">
                    <p>{firstName} {lastName}, sua reserva foi efetuada com sucesso</p>
                    <p>
                        Confira abaixo informações importantes para a sua experiência com a Localiza Hertz.
                    </p>

                    <br/>

                    <p>O código da sua reserva é:</p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <div className="d-flex justify-content-center">
                        <ConfirmationCode>
                            MOBO163WVOU
                        </ConfirmationCode>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReserveConfirmedView;

