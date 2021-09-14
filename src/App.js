import React, {Suspense, lazy} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
} from "react-router-dom";

import Header from "./components/Header";

const CarGroupsView = lazy(() => import('./views/CarGroupsView'));
const ReserveFlowView = lazy(() => import('./views/ReserveFlowView/ReserveFlowView'));

function App() {
    return (
        <div>
            <Header/>

            <div className="container pt-5 pb-5">

                <Router>
                    <ul className="nav mb-3">
                        <li className="nav-item me-3">
                            <Link to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/fluxo-reserva/A">Reservas grupo A</Link>
                        </li>
                    </ul>

                    <Suspense
                        fallback={<div>Loading...</div>}
                    >

                        <Switch>

                            <Route path="/home">
                                <CarGroupsView/>
                            </Route>

                            <Route path="/fluxo-reserva/:carGroupCode">
                                <ReserveFlowView/>
                            </Route>

                            <Redirect to="home"/>

                        </Switch>

                    </Suspense>

                </Router>

            </div>
        </div>
    );
}

export default App;
