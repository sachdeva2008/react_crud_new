import React, { Component } from 'react';
import './App.css';
import Main from './Containers/Main';
import Dashboard from './Containers/Dashboard';
import ResetPassword from './Components/ResetPassword';
import { Route, Switch } from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import Menu from './Components/Menu';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>      
        <Switch>                                                                             
          <Route path="/calculator" exact  component={Main} />
          <Route path="/dashboard"  component={Dashboard} />
          <Route path="/resetpassword" component={ResetPassword} />
          <Route path="/menu" component={Menu} />
        </Switch>      
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
