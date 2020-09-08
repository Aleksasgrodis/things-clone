import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addTodo } from './redux/actions';
import ProjectView from './components/ProjectView';

import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
function App(props) {
  return (
    <Router>
      <div>Sidebar</div>
      <div>Content</div>
      <NavLink to="/">Inbox</NavLink>
      <NavLink to="/today">Today</NavLink>
      <NavLink to="/upcoming">Upcoming</NavLink>
      <NavLink to="/anytime">Anytime</NavLink>
      <NavLink to="/someday">Someday</NavLink>
      <NavLink to="/logbook">Logbook</NavLink>
      <NavLink to="/trash">Trash</NavLink>
      <NavLink to="/area/12233323">AreaX</NavLink>
      <NavLink to="/project/123323">ProjectX</NavLink>

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
          <h2>area</h2>
        </Route>
        <Route path="/project/:projectID">
          <ProjectView />
        </Route>
      </Switch>
    </Router>
  );
}

export default connect(null, { addTodo })(App);
