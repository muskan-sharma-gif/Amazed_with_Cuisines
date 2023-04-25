import React from 'react'
import './App.css';
import {BrowserRouter as Router , Switch ,Route} from "react-router-dom"
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Cuisine from './component/Cuisine';

const App = () => {


return (
  <>
  <Router>
  <Navbar/>
  
  <Switch>
	  <Route exact path="/"><Cuisine key="general" typo="world"/></Route>
    <Route exact path="/indian"><Cuisine key="indian" typo="indian" /></Route>
    <Route exact path="/american"><Cuisine key="american" typo="american" /></Route>
    <Route exact path="/japanese"><Cuisine key="japanese" typo="japanese" /></Route>
    <Route exact path="/italian"><Cuisine key="italian" typo="italian" /></Route>
    <Route exact path="/chinese"><Cuisine key="chinese"  typo="chinese" /></Route>
	</Switch>
  <Footer/>
  </Router>
  </>
);
}

export default App;
