import React from 'react';
import { Link } from 'react-router-dom';
import { useDrag } from 'react-dnd';

function AdvancedProjectListItem(props) {
  const [collectedProps, drag] = useDrag({
    item: { id: props.id, type: 'project' },
  });
  return (
    <div className="item" ref={drag}>
      <input type="checkbox" className="checkbox" name="" id="" />
      <Link to={`/project/${props.id}`} className="title">
        {props.title}
      </Link>
      <span className="task-count">4</span>
    </div>
  );
}

export default AdvancedProjectListItem;
