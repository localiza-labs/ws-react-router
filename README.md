# Setup

Como React é uma lib ele não possui necessariamente uma solução de navegação própria.

Para fazer a navegação entre "páginas" da sua aplicação é preciso criar sua própria solução ou usar uma biblioteca de mercado, é o que vamos fazer.

Vamos utilizar a lib `react-router-dom` e a primeira coisa que vamos fazer é a instalação:

```
npm install --save react-router-dom
```

ou

```
yarn react-router-dom
```

### Router

Agora que instalamos a lib, vamos configurar nosso `Router` no component `App.js`.

Importe as dependências:

```
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
```

Coloque o `Router` onde faz sentido para a sua aplicação, lembrando que esse local vai ser a raiz da navegação do app.

No nosso caso vamos colocar abaixo do `Header`, pois nessa aplicação de exemplo o header faz parte d etodas as rotas:

```
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
```
