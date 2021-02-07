import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './layout/Navbar'
import Dashboard from './dashboard/Dashboard'
import ProjectDetails from './projects/ProjectDetails'
import React, { Component } from 'react';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import CreateProject from './projects/CreateProject';
import { Container } from 'react-bootstrap'

class App extends Component {

  render() {

    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/project/:id' component={ProjectDetails} />
            <Container className="d-flex align-items-center justify-content-center"
              style={{ minHeight: "100vh" }}
            >
              <div className="w-100" style={{ maxWidth: "400px" }}>
                <Route path='/signup' component={SignUp} />
              </div>

            </Container>
            <Route path='/signin' component={SignIn} />
            <Route path='/create' component={CreateProject} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
