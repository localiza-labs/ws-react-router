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
