import React  from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import  Players  from "./components/players";
import NavBar from './components/navbar';

function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <Switch>
        <Route path="/players" component={Players}/>
        <Redirect to="/players"/>
      </Switch>
      
    </React.Fragment>
  );
}

export default App;
