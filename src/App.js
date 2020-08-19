import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import HomeContainer from './containers/HomeContainer';
import HotelsContainer from './containers/HotelsContainer';
import LoginContainer from './containers/LoginContainer';
import SignupContainer from './containers/SignupContainer';
import NotFoundContainer from './containers/NotFoundContainer';

class App extends React.Component {
  render() {
    console.log('App', App);
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/">
              <HomeContainer />
            </Route>
            <Route path="/hotels">
              <HotelsContainer />
            </Route>
            <Route path="/hotels/:id">
              <HotelsContainer />
            </Route>
            <Route path="/login">
              <LoginContainer />
            </Route>
            <Route path="/signup">
              <SignupContainer />
            </Route>
            <Route path="*">
              <NotFoundContainer />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
