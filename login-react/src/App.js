import React from 'react';
import Users from './components/Users';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path="/users" exact component={Users} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
