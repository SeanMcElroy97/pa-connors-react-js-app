import React  from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import NavBar from './components/navbar';
import  Players  from "./components/players";
import Events from './components/events';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route path="/players" component={Players}/>
        <Route path="/events" component={Events}/>
        <Redirect to="/players"/>
      </Switch>
      
    </React.Fragment>
  );
}

export default App;
