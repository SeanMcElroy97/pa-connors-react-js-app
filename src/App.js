import React  from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import NavBar from './components/navbar';
import  Players  from "./components/players";
import Events from './components/events';
import Footer from './components/footer';
import PlayerForm from './components/playerForm';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route path="/players" exact component={Players}/>
        <Route path="/players/:id" component={PlayerForm}/>
        <Route path="/events" component={Events}/>
        <Redirect to="/players"/>
      </Switch>
      <Footer/>
      
    </React.Fragment>
  );
}

export default App;
