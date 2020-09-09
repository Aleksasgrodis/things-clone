import React from 'react';
import { NavLink } from 'react-router-dom';
import NewArea from './NewArea';
import NewProject from './NewProject';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCoffee,
  faCircle,
  faCircleNotch,
  faInbox,
  faStar,
  faCalendarAlt,
  faLayerGroup,
  faArchive,
  faBook,
  faTrash,
  faBoxOpen,
} from '@fortawesome/free-solid-svg-icons';

const selectAreas = state => (state ? state.areas : []);

const selectAllAreas = createSelector(selectAreas, areas => areas);

const selectAllProjects = createSelector(state => state.projects);

function Sidebar() {
  const areas = useSelector(state =>
    state.areas.map(({ id, title }) => ({ title, id })),
  );
  const projects = useSelector(state =>
    state.projects.map(({ title, parent, id }) => ({ title, parent, id })),
  );
  // console.log(areas, projects);

  const areasWithChildren = areas.map(area => ({
    ...area,
    children: projects.filter(project => project.parent === area.id),
  }));

  const projectsWithoutParents = projects.filter(project => !project.parent);
  return (
    <div className="sidebar">
      <div className="list">
        <NavLink exact activeClassName="active" className="spacing item" to="/">
          <FontAwesomeIcon className="inbox" icon={faInbox} />
          <span className="title">Inbox</span>
        </NavLink>
        <NavLink activeClassName="active" className="item" to="/today">
          <FontAwesomeIcon className="today" icon={faStar} />
          <span className="title">Today</span>
        </NavLink>
        <NavLink activeClassName="active" className="item" to="/upcoming">
          <FontAwesomeIcon className="upcoming" icon={faCalendarAlt} />
          <span className="title">Upcoming</span>
        </NavLink>
        <NavLink activeClassName="active" className="item" to="/anytime">
          <FontAwesomeIcon className="anytime" icon={faLayerGroup} />
          <span className="title">Anytime</span>
        </NavLink>
        <NavLink activeClassName="active" className="spacing item" to="/someday">
          <FontAwesomeIcon className="someday" icon={faArchive} />
          <span className="title">Someday</span>
        </NavLink>
        <NavLink activeClassName="active" className="item" to="/logbook">
          <FontAwesomeIcon className="logbook" icon={faBook} />
          <span className="title">Logbook</span>
        </NavLink>
        <NavLink activeClassName="active" className="item" to="/trash">
          <FontAwesomeIcon className="trash" icon={faTrash} />
          <span className="title">Trash</span>
        </NavLink>
        <div className="project-bundle">
          {projects && projectsWithoutParents && projectsWithoutParents.length
            ? projectsWithoutParents.map(p => (
                <NavLink
                  key={p.id}
                  activeClassName="active"
                  className="item thin"
                  to={`/project/${p.id}`}
                >
                  <FontAwesomeIcon icon={faCircle} />
                  <span className="title">{p.title}</span>
                </NavLink>
              ))
            : null}
        </div>

        {areasWithChildren && areasWithChildren.length
          ? areasWithChildren.map(a => (
              <div className="project-bundle">
                <NavLink
                  key={a.id}
                  activeClassName="active"
                  className="item"
                  to={`/area/${a.id}`}
                >
                  <FontAwesomeIcon icon={faBoxOpen} />
                  <span className="title">{a.title}</span>
                </NavLink>
                {a.children && a.children.length
                  ? a.children.map(c => (
                      <NavLink
                        key={c.id}
                        activeClassName="active"
                        className="item thin"
                        to={`/project/${c.id}`}
                      >
                        <FontAwesomeIcon icon={faCircle} />
                        <span className="title">{c.title}</span>
                      </NavLink>
                    ))
                  : null}
              </div>
            ))
          : null}
      </div>
      <div className="actionables">
        <NewProject />
        <NewArea />
      </div>
    </div>
  );
}

export default Sidebar;
