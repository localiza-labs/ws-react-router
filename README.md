# Nested Routes

O nosso fluxo de reservas é composto por 3 passos: dados da reserva, adicionais e dados pessoais. Além disso, ainda temos uma tela de confirmação.

Hoje estamos apresentando somente a confirmação, mas precisamos bolar alguma forma de navegar entre esses passos, no fluxo de reservas.

E para isso vamos utilizar uma técnica chamada de `nested routes` ou `rotas aninhadas`.

### ReserveFlowView

Dentro do nosso componente `ReserveFlowView` vamos adicionar outro `Router`, ou seja, um router dentro do router principal.

```
const ReserveFlowView = () => {
    const {carGroupCode} = useParams();
    const { url } = useRouteMatch();

    return (
        <ReserveFlowProvider>
            <h1>Reserva do grupo {carGroupCode}</h1>

            <Router basename={url}>
                <Switch>

                    <Route exact path={`/dados-reserva`}>
                        <FirstStepView/>
                    </Route>

                    <Route exact path={`/adicionais`}>
                        <SecondStepView/>
                    </Route>

                    <Route exact path={`/dados-pessoais`}>
                        <ThirdStepView/>
                    </Route>

                    <Route exact path={`/confirmacao`}>
                        <ReserveConfirmedView/>
                    </Route>

                    <Redirect to={`/dados-reserva`}/>

                </Switch>
            </Router>


        </ReserveFlowProvider>
    );
}
```

Notem estamos usando um parâmetro `basename` no router e que estamos usando o hook `useRouteMatch` para preencher essa prop.

Ela basicamente diz qual é o path base desse router, que no nosso caso é `/fluxo-reserva/:carGroupCode`, porém, como precisamos que nosso basename seja absoluto temos que passar a url exata do componente `ReserveFlowView`, por isso usamos a url do `useRouteMatch`.

Agora vamos atualizar as nossas views filhas:

#### FirstStepView

```
import React, {useContext} from 'react';
import QuotationForm from "../../components/QuotationForm";
import {ReserveFlowContext} from "../../providers/ReserveFlowProvider";
import {useHistory} from "react-router-dom";

const FirstStepView = () => {
    const history = useHistory();
    const {steps, updateStepValues, updateStepValidation} = useContext(ReserveFlowContext);
    const currentStep = steps[0];

    const onSubmit = (values) => {
        updateStepValues(currentStep.name, values);

        const nextStep = steps[1];
        history.push(nextStep.path);
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
```

#### SecondStepView

```
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
```

#### ThirdStepView

```
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
```

#### ReserveConfirmedView

```
import React, {useContext} from 'react';
import successCheck from '../../assets/svg/success.svg';
import {ConfirmationCode} from "./styles";
import {ReserveFlowContext} from "../../providers/ReserveFlowProvider";

const ReserveConfirmedView = () => {
    const {steps} = useContext(ReserveFlowContext);
    const personStep = steps[2];
    const {firstName, lastName} = personStep.value;

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
```




