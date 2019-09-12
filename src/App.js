import React from 'react';

import Navbar from './Navbar';
import Session from './Session';
import Invigilation from './Invigilation';
import BatchOwner from './BatchOwner';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router className="App">
      <Navbar />

      <div className="container-fluid">
        <Switch>

          <Route exact path="/session" component={Session} />
          <Route exact path="/invigilation" component={Invigilation} />
          <Route exact path="/batchOwner" component={BatchOwner} />

        </Switch>
      </div>

    </Router>
  );
}

export default App;
