import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Switch, Route } from 'react-router-dom'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import 'slick-carousel/slick/slick';
import 'bootstrap/dist/css/bootstrap.min.css'
//Paginas
import { Home } from './pages/Home';
import { Perfil } from './pages/Perfil';
import { DatosApi } from './pages/DatosApi';

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
            <Route path='/datos' component={ DatosApi } />
            <Route component={ Home } />
        </Switch>
        <Footer />
      </Navbar>
    </div>
  );
}

export default App;
