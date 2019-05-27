import React, { Component } from 'react';
import './styles/main.scss';
import { Route, Redirect, Switch } from 'react-router';
import HomePage from './pages/HomePage';
import GreetingPage from './pages/GreetingPage';
import ConvertPage from './pages/ConvertPage';

class App extends Component {

  render() {

    return (
        <Switch>
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/greeting" component={GreetingPage} />
          <Route exact path="/convert" component={ConvertPage} />
         <Redirect to="/home" />
        </Switch>
    );
  }
}

export default App;
