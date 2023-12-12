
import { Component } from 'react';
import Login from './components/Login';
import Profile from './components/Profile';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import './App.css';

class App extends Component{
  render(){
    return(
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/Profile/:id" component={Profile}/>
      </Switch>
      </BrowserRouter>
    )
  }
}


export default App;
