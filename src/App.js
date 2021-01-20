import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Login from './Components/Login/Login';
import WebexPage from './Components/WebexPage/WebexPage';
import '@momentum-ui/core/css/momentum-ui.min.css';
import '@webex/components/dist/css/webex-components.css';
import NewMeetingForm from './Components/NewMeetingForm/NewMeetingForm';


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
              <WebexPage/>
            </Route>

            <Route exact path="/webex/create"> 
              <NewMeetingForm/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
