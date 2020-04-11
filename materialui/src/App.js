import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Switch, Route } from 'react-router-dom'

//Paginas
import { Home } from './pages/Home';
import { Perfil } from './pages/Perfil';

//Componentes
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Navbar>
        <Switch>
            <Route exact path='/' component={ Home } />
            <Route path='/perfil' component={ Perfil } />
            <Route component={ Home } />
        </Switch>
        <Footer />
      </Navbar>
    </div>
  );
}

export default App;
