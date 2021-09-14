# Lazy Loading (Code-Splitting)

Como estamos falando de um `SPA`, dependendo do tamanho da sua aplicação talvez fosse interessante carregar apenas o que é necessário para o usuário, diminuindo assim o tamanho e tempo de carregamento do `bundle` principal.

Para isso o react tem uma API de alto nível que se chama `lazy` e através dela conseguimos fazer o `dynamic import` dos nossos componentes.

Vamos aplicar essa técnica no nosso `App.js`.

Primeiro importaremos o `lazy` e o `Suspense`:

```
import React, {Suspense, lazy} from "react";
```

E em seguida atualizaremos o modo como importamos nossos componentes:

```
const CarGroupsView = lazy(() => import('./views/CarGroupsView'));
const ReserveFlowView = lazy(() => import('./views/ReserveFlowView/ReserveFlowView'));
```

Agora basta "envolver" nosso `Switch` com o `Suspense` e pronto, lazy loading praticamente de graça.

```
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
```

Agora o código dos componentes das rotas apenas é carregado quando necessário.
