import React  from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import NavBar from './components/navbar';
import  Players  from "./components/players";
import Events from './components/events';
import Footer from './components/footer';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route path="/players" component={Players}/>
        <Route path="/events" component={Events}/>
        <Redirect to="/players"/>
      </Switch>
      <Footer/>
      
    </React.Fragment>
  );
}

export default App;
