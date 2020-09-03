import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';

import About from './Components/About/About';
import Beer from './Components/Beer/Beer';
import BeerDetail from './Components/BeerDetail/BeerDetail';
import BeerInfo from './Components/BeerInfo/BeerInfo';

// export const infoProvider = createContext();

function App() {
  // const [info , setInfo] = useState([]);

  return (
    <div>
      <Router>
      <Navbar/>
        <Switch>
        <Route path="/home">
          <Home/>
         </Route>
          <Route path="/about">
          <About></About>
          </Route>
          <Route exact path="/beers">
          <Beer/>
         </Route>
         <Route path="/beers/:id">
          <BeerInfo/>
         </Route>

          <Route exact path="/">
          <Home/>
         </Route>
         <Route path="*">
         <NoMatch/>
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
