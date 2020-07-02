import React from 'react';
import Users from './components/Users';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Form from './components/Form';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path="/users" exact component={Users} />
          <Route path="/form" exact component={Form} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
