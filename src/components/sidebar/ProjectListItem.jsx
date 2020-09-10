import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

function ProjectListItem(props) {
  // requires useDrop to drop tasks and headings into
  return (
    <NavLink
      key={props.id}
      activeClassName="active"
      className="item thin"
      to={`/project/${props.id}`}
    >
      <FontAwesomeIcon icon={faCircle} />
      <span className="title">{props.title}</span>
    </NavLink>
  );
}

export default ProjectListItem;
