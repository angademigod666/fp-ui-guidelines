import React from 'react';

import Navbar from './Navbar';
import Session from './Session';
import Invigilation from './Invigilation';
import BatchOwner from './BatchOwner';

import { BrowserRouter as Router, Switch, Route , Redirect} from 'react-router-dom';


function App() {
  return (
    <Router className="App">
      <Navbar />

      <div className="container-fluid">
        <Switch>
          <Route exact path="/session" component={Session} />
          <Route exact path="/invigilation" component={Invigilation} />
          <Route exact path="/batchOwner" component={BatchOwner} />
          <Route exact path="/*" render={()=><Redirect to="/session"/>} />
        </Switch>
      </div>

    </Router>
  );
}

export default App;
