import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import React,{ Component } from 'react';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';

class App extends Component {
  
  render(){

    return (
        <div className="App">
          <BrowserRouter>
          <Navbar/>
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/project/:id' component={ProjectDetails} />
            <Route path='/signin' component={SignIn}/>
            <Route path='/signup' component={SignUp}/>
            <Route path='/create' component={CreateProject}/>
          </Switch>
          </BrowserRouter>
        </div>
    );
  }
}

export default App;
