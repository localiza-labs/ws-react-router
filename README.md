# Guards

Em frameworks como `Angular` e `Vue` o próprio router tem solução para prevenir acesso a rotas, caso não sejam atendidas as devidas condições.

No caso do `React`, especificamente utilizando o `react-router-dom`, você pode criar um seu próprio componente `Route` para realizar essa função.

É bem simples. Primeiro crie o componente `src/views/ReserveFlowView/FlowRoute.js`:

```
import {useContext} from "react";
import {Redirect, Route} from "react-router-dom";
import {ReserveFlowContext} from "../../providers/ReserveFlowProvider";

function FlowRoute({ children, ...rest }) {
    const {steps} = useContext(ReserveFlowContext);
    const firstStep = steps[0];

    return (
        <Route
            {...rest}
            render={({ location }) =>
                firstStep.valid ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: firstStep.path,
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

export default FlowRoute;
```

Agora é só substituir o componente `Route` pelo `FlowRoute`, onde for necessário:

```
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
    useRouteMatch, Redirect
} from "react-router-dom";

import FirstStepView from "./FirstStepView";
import SecondStepView from "./SecondStepView";
import ThirdStepView from "./ThirdStepView";
import ReserveConfirmedView from "./ReserveConfirmedView";
import ReserveFlowProvider from "../../providers/ReserveFlowProvider";
import FlowRoute from "./FlowRoute";

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

                    <FlowRoute exact path={`/adicionais`}>
                        <SecondStepView/>
                    </FlowRoute>

                    <FlowRoute exact path={`/dados-pessoais`}>
                        <ThirdStepView/>
                    </FlowRoute>

                    <FlowRoute exact path={`/confirmacao`}>
                        <ReserveConfirmedView/>
                    </FlowRoute>

                    <Redirect to={`/dados-reserva`}/>

                </Switch>
            </Router>


        </ReserveFlowProvider>
    );
};

export default ReserveFlowView;
```






