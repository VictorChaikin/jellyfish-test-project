import React, { Component } from 'react';
import './styles/main.scss';
import { Route, Redirect, Switch } from 'react-router';
import HomePage from './pages/HomePage';
import GreetingPage from './pages/GreetingPage';
import ConvertPage from './pages/ConvertPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: localStorage.getItem('name')
    };
  }

  render() {
    const { name } = this.state;

    return (
        <Switch>
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/greeting" component={GreetingPage} />
          <Route exact path="/convert" component={ConvertPage} />
          {
            name === '' ? <Redirect to="/home" /> : <Redirect to="/greeting" />
          }
        </Switch>
    );
  }
}

export default App;
