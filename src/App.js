import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import Header from "./components/Header";
import CarGroupsView from "./views/CarGroupsView";
import ReserveFlowView from "./views/ReserveFlowView/ReserveFlowView";

function App() {
    return (
        <div>
            <Header/>

            <div className="container pt-5 pb-5">

                <Router>

                    <Switch>

                        <Route path="/home">
                            <CarGroupsView/>
                        </Route>

                        <Route path="/fluxo-reserva/:carGroupCode">
                            <ReserveFlowView/>
                        </Route>

                        <Redirect to="home"/>

                    </Switch>

                </Router>

            </div>
        </div>
    );
}

export default App;
