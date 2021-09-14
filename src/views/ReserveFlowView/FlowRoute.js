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
