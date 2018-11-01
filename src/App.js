import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import './App.css';
import { LoginPage } from './containers/LoginPage';
import { HomePage } from './containers/HomePage';
import { ProfilePage } from './containers/ProfilePage';
import { NavigationBar } from './components/NavigationBar';
import { Footer } from './components/Footer';
import { CameraHistoryPage } from './containers/CameraHistoryPage';

const DashboardLayout = ({children, ...rest}) => {
  return (
    <div className="app">
      <NavigationBar />
      <div className="main">{children}</div>
      <Footer />
    </div>
  );
}

const LoginLayout = ({children, ...rest}) => {
  return (
    <div className="app">
      <div className="main">{children}</div>
      <Footer/>
    </div>
  );
}

const DashboardRoute = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <DashboardLayout>
          <Component {...matchProps} />
      </DashboardLayout>
    )} />
  );
};

const LoginLayoutRoute = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <LoginLayout>
          <Component {...matchProps} />
      </LoginLayout>
    )} />
  );
};

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <LoginLayoutRoute path="/login" component={LoginPage} />
          <DashboardRoute path="/home" component={HomePage} />
          <DashboardRoute path="/profile" component={ProfilePage} />
          <DashboardRoute path="/history" component={CameraHistoryPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
