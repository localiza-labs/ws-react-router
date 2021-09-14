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
};

export default ReserveFlowView;
