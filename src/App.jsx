import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from './redux/actions';
import ProjectView from './components/ProjectView';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import AreaView from './components/AreaView';
import Sidebar from './components/Sidebar';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Inbox from './components/pages/Inbox';
import Today from './components/pages/Today';
import Upcoming from './components/pages/Upcoming';
import Anytime from './components/pages/Anytime';
import Someday from './components/pages/Someday';
import Logbook from './components/pages/Logbook';
import Trash from './components/pages/Trash';
function App(props) {
  return (
    <Router>
      <DndProvider backend={HTML5Backend}>
      <div className="wrapper">
        <div className="dashboard">
          <Sidebar />
          <div className="content-wrapper">
            <Switch>
              <Route exact path="/">
                <Inbox />
              </Route>
              <Route path="/today">
                <Today />
              </Route>
              <Route path="/upcoming">
                <Upcoming />
              </Route>
              <Route path="/anytime">
                <Anytime />
              </Route>
              <Route path="/someday">
                <Someday />
              </Route>
              <Route path="/logbook">
                <Logbook />
              </Route>
              <Route path="/trash">
                <Trash />
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
      </DndProvider>
    </Router>
  );
}

export default connect(null, { addTodo })(App);
