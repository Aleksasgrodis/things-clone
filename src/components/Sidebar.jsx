import React from 'react';
import { NavLink } from 'react-router-dom';
import NewArea from './NewArea';
import NewProject from './NewProject';


function Sidebar() {
  return (
    <div className="sidebar">
      <div className="list">
        <NavLink exact activeClassName="active" className="spacing" to="/">
          Inbox
        </NavLink>
        <NavLink activeClassName="active" to="/today">
          Today
        </NavLink>
        <NavLink activeClassName="active" to="/upcoming">
          Upcoming
        </NavLink>
        <NavLink activeClassName="active" to="/anytime">
          Anytime
        </NavLink>
        <NavLink activeClassName="active" className="spacing" to="/someday">
          Someday
        </NavLink>
        <NavLink activeClassName="active" to="/logbook">
          Logbook
        </NavLink>
        <NavLink activeClassName="active" className="spacing" to="/trash">
          Trash
        </NavLink>

        <NavLink activeClassName="active" to="/area/12233323">
          AreaX
        </NavLink>
        <NavLink activeClassName="active" to="/project/123323">
          ProjectX
        </NavLink>
      </div>
      <div className="actionables">
        <NewProject />
        <NewArea />
      </div>
    </div>
  );
}

export default Sidebar;
