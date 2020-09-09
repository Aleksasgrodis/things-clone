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
        <div className="min-h-3/4 max-h-3/4 w-full rounded-md bg-gray-800 text-white grid grid-cols-5 overflow-hidden">
          <div className="container pt-6 pl-6 bg-gray-900 h-full w-full col-start-1 grid grid-rows-6">
            <div className="flex flex-col row-span-6 overflow-y-scroll">
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
            <div className="row-span-1">
              <button>new project</button>
              <button>new area</button>
            </div>
          </div>
          <div className="h-full bg-gray-800 flex flex-col p-6 text-white col-span-4">
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
