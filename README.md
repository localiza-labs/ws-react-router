# Navegação

Agora que configuramos nosso `Router` conseguimos navegar para o "página" correta de acordo com a rota, mas não queremos ter que mudar a rota direto no navegador toda vez que precisarmos ir para outra página.

Para isso a lib `react-router-dom` tem um componente e um `hook` que pode nos auxiliar.

### Link

A título de exemplo vamos inserir alguns links no nosso `App.js`.

Primeiro importe a dependência:

```
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect, 
    Link
} from "react-router-dom";
```

E dentro do nosso `Router` vamos criar alguns links para navegar entre a Home e o Fluxo de Reservas:

```
...
    <Router>
    
        <ul className="nav mb-3">
            <li className="nav-item me-3">
                <Link to="/home">Home</Link>
            </li>
            <li className="nav-item">
                <Link to="/fluxo-reserva/A">Reservas grupo A</Link>
            </li>
        </ul>
...
```

Agora que temos os componentes `Link`, basta clicar em qualquer um deles que eles redirecionam para a rota correta.

### useHistory

Nós também podemos navegar usando o hook `useHistory` e vamos fazer isso no grid de grupo de carros.

Toda vez que o usuário clicar no botão `Reserve agora` ele será direcionado para o fluxo de reserva correspondente ao grupo que ele selecionou.

No componente `CarGroupsView` vamos importar nosso hook:

```
import { useHistory } from 'react-router-dom';
```

Agora é só atualizar o componente para disparar o método `push` do nosso `history`:

```
function CarGroupsView(){
    const history = useHistory();

    const reserve = (carGroupCode) => {
        history.push(`/fluxo-reserva/${carGroupCode}`);
    }

    return (
        <CarGroupsGrid
            carGroups={carGroups}
            onReserve={reserve}
        />
    );
}
```

### Extraindo dados da rota

Essa rota de fluxo de reserva é dinâmica e muda conforme o grupo de carros escolhido.

Numa aplicação real provavelmente você usaria a essa informação do grupo de carros que está na rota.

Para isso podemos usar o hook `useParams`:

```
import {useParams} from "react-router-dom";
```

Em seguida configuramos um cabeçalho com a informação do grupo selecionado:

```
const ReserveFlowView = () => {
    const {carGroupCode} = useParams();

    return (
        <ReserveFlowProvider>
            <h1>Reserva do grupo {carGroupCode}</h1>
            <ReserveConfirmedView/>
        </ReserveFlowProvider>
    );
};
```




