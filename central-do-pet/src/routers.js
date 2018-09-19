import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Main from './pages/main/main';
//import Result from './pages/result/result';
//import CreateAccount from './pages/createAccount/createAccount';
//import UserSchedules from './pages/userSchedules/userSchedules';

class Routers extends Component {
  render() {
    return (
      <main>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/main' component={Main}/>
          </Switch>
        </BrowserRouter>
      </main>
    )
  }
}

export default Routers;
