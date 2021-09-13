import Header from "./components/Header";
import QuotationForm from "./components/QuotationForm";
import CarGroupsView from "./views/CarGroupsView";
import ReserveFlowView from "./views/ReserveFlowView/ReserveFlowView";

function App() {
    return (
        <div>
            <Header/>

            <div className="container pt-5 pb-5">
                {/*<QuotationForm/>*/}

                {/*<CarGroupsView/>*/}

                <ReserveFlowView/>
            </div>
        </div>
    );
}

export default App;
