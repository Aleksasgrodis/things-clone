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
      <div className="wrapper">
        <div className="dashboard">
          <div className="sidebar">
            <div className="list">
              <NavLink exact activeClassName="active" className="spacing" to="/">Inbox</NavLink>
              <NavLink activeClassName="active" to="/today">Today</NavLink>
              <NavLink activeClassName="active" to="/upcoming">Upcoming</NavLink>
              <NavLink activeClassName="active" to="/anytime">Anytime</NavLink>
              <NavLink activeClassName="active" className="spacing" to="/someday">Someday</NavLink>
              <NavLink activeClassName="active" to="/logbook">Logbook</NavLink>
              <NavLink activeClassName="active" className="spacing" to="/trash">Trash</NavLink>
              <NavLink activeClassName="active" to="/area/12233323">AreaX</NavLink>
              <NavLink activeClassName="active" to="/project/123323">ProjectX</NavLink>
            </div>
            <div className="actionables">
              <button>new project</button>
              <button>new area</button>
            </div>
          </div>
          <div className="content-wrapper">
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
