import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import Routes from './routes/routesAdm';
import history from './services/history';
import { AuthProvider } from './Context/AuthContext';

//Importando as paginas de navegação
import { Home } from './pages/Home';
import { Contato } from './pages/Contato';
import { Sobre } from './pages/Sobre';
import { Pedido } from './pages/Pedidos';
import { ItenCarrinho } from './pages/Carrinho/Visualizar';


//Importando Menu e layout da página home


function App() {
  return (
    <div>
      <AuthProvider>
        
        <Router history={history}>
          <Routes />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/pedido" component={Pedido} />
            <Route path="/contato" component={Contato} />
            <Route path="/meu-carrinho" component={ItenCarrinho} />
            <Route path="/sobre" component={Sobre} />
          </Switch>
        </Router>
      </AuthProvider>
    </div>

  );

}

export default App;
