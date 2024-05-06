import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavbarComponent from './Navbar';
import SortingAlgorithms from './SortingAlgorithms';
import About from './About'; // Create this file
import Contact from './Contact'; // Create this file

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarComponent />
        <Switch>
          <Route exact path="/" component={SortingAlgorithms} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
