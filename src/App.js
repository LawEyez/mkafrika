import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css'; 
import Home from './components/pages/Home';
import Services from './components/pages/Sevices';
import About from './components/pages/About';
import Blog from './components/pages/Blog';

function App() {
  return (
    <>
    <Router>
      <Navbar />

      <Switch>
        <Route path='/blog' exact component={Blog}/>
        <Route path='/about' exact component={About}/>
        <Route path='/services' exact component={Services}/>
        <Route path='/' exact component={Home}/>
      </Switch>
    </Router>
    </>
      
  );
}

export default App;
