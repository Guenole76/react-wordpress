
import React from 'react';
import './App.css';

import { BrowserRouter , Route} from 'react-router-dom';
import Accueil from './components/Accueil';
import Event from './components/Event';
import Menu from './components/Menu';
import Allumnis from './components/Allumnis';





function App() {
  return (
    <BrowserRouter>
      <Menu />

      <Route exact path="/" component ={Accueil} />
      <Route path="/event" component ={Event} />
      <Route strict path="/allumnis" component ={Allumnis} />
    </BrowserRouter>
  )

}
export default App;
