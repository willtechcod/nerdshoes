import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

//Importando as paginas de navegação
import { Home } from './pages/Home';
import { Contato } from './pages/Contato';
import { Sobre } from './pages/Sobre';
import { AdicionarProd } from './pages/Cadastrar/AdicionarProd';
import { VisualizarProd } from './pages/Cadastrar/VisualizarProd';
import { ApagarProd } from './pages/Cadastrar/ApagarProd';
import { EditarProd } from './pages/Cadastrar/EditarProd';

//Importando Menu e layout da página home
import { Menu } from './components/Menu';
import { Rodape } from './components/Rodape';

function App() {
  return (
    <div>
      <Menu/>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contato" component={Contato} />
          <Route exact path="/adicionar-produto" component={AdicionarProd} />
          <Route exact path="/visualizar-produto" component={VisualizarProd} />
          <Route exact path="/editar-produto" component={EditarProd} />
          <Route exact path="/apagar-produto" component={ApagarProd} />
          <Route path="/sobre" component={Sobre} />
        </Switch>
        <Rodape/>
      </Router>
      
    </div>
    
  );
  
}

export default App;
