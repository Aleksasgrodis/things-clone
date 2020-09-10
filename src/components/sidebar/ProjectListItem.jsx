import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { useDrag } from 'react-dnd';

function ProjectListItem(props) {
  const [collectedProps, drag] = useDrag({
    item: { id: props.id, type: 'project' },
  });
  return (
    <NavLink
      ref={drag}
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
