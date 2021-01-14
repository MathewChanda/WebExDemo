import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/"> 
              <Redirect to="/login"/>
            </Route>

            <Route exact path="/login"> 
              <Login/>
            </Route>

            <Route exact path="/webex"> 
              <h1>Hello</h1>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
