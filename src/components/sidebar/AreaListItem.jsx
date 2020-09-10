import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faCircle } from '@fortawesome/free-solid-svg-icons';

function AreaListItem(props) {
  const [collapsed, setCollapsed] = useState(false);
  // requires useDrop to drop tasks and projects into
  return (
    <div className="project-bundle">
      <NavLink
        key={props.id}
        activeClassName="active"
        className="item"
        to={`/area/${props.id}`}
      >
        <FontAwesomeIcon icon={faBoxOpen} />
        <span className="title">{props.title}</span>
        <button onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? 'open' : 'close'}
        </button>
      </NavLink>
      <div style={{ display: collapsed ? 'none' : 'contents' }}>
        {props.children && props.children.length
          ? props.children.map(c => (
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
    </div>
  );
}

export default AreaListItem;
