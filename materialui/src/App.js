import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import { Home } from './pages/Home';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Navbar>
        <Home />
        <Footer />
      </Navbar>
    </div>
  );
}

export default App;
