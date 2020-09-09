import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from './redux/actions';
import ProjectView from './components/ProjectView';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';
import AreaView from './components/AreaView';
function App(props) {
  return (
    <Router>
      <div className="container h-screen flex mx-auto justify-center items-center">
        <div className="min-h-3/4 w-full rounded-md overflow-hidden bg-gray-800 text-white flex flex-wrap">
        <div className="container pt-6 pl-6 pr-6 h-auto w-1/4 bg-gray-900 flex flex-col">

          <NavLink to="/">Inbox</NavLink>
          <NavLink to="/today">Today</NavLink>
          <NavLink to="/upcoming">Upcoming</NavLink>
          <NavLink to="/anytime">Anytime</NavLink>
          <NavLink to="/someday">Someday</NavLink>
          <NavLink to="/logbook">Logbook</NavLink>
          <NavLink to="/trash">Trash</NavLink>
          <NavLink to="/area/12233323">AreaX</NavLink>
          <NavLink to="/project/123323">ProjectX</NavLink>
        </div>
        <div className="h-auto w-3/4 bg-gray-800 flex flex-col p-6 text-white">

        
          <Switch>
            <Route exact path="/">
              <h2>inbox</h2>
            </Route>
            <Route path="/today">
              <h2>today</h2>
            </Route>
            <Route path="/upcoming">
              <h2>upcoming</h2>
            </Route>
            <Route path="/anytime">
              <h2>anytime</h2>
            </Route>
            <Route path="/someday">
              <h2>someday</h2>
            </Route>
            <Route path="/logbook">
              <h2>logbook</h2>
            </Route>
            <Route path="/trash">
              <h2>trash</h2>
            </Route>
            <Route path="/trash">
              <h2>trash</h2>
            </Route>
            <Route path="/area/:areaID">
              <AreaView />
            </Route>
            <Route path="/project/:projectID">
              <ProjectView />
            </Route>
          </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default connect(null, { addTodo })(App);
