import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes } from '../Constants';
import { useDispatch } from 'react-redux';
import { editTodo } from '../../redux/actions';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';

function ProjectListItem(props) {
  const [collectedProps, drag] = useDrag({
    item: { id: props.id, type: 'project' },
  });
  const [{ isActive }, drop] = useDrop({
    accept: [ItemTypes.TASK],
    drop: item => changeItemParent(item),
    collect: monitor => ({
      isActive: monitor.canDrop() && monitor.isOver(),
    }),
  });
  const dispatch = useDispatch();
  const changeItemParent = ({ id }) => {
    dispatch(editTodo({ id, parent: props.id }));
  };
  return (
    <div ref={drop} className="drop-wrapper">
      <NavLink
        ref={drag}
        activeClassName="active"
        className={`item thin ${isActive ? 'droppable' : null}`}
        to={`/project/${props.id}`}
      >
        <div className="progress-indicator small">
            <CircularProgressbar
              value={75}
              strokeWidth={50}
              styles={buildStyles({
                strokeLinecap: 'butt',
              })}
            />
          </div>
        <span className="title">{props.title}</span>
      </NavLink>
    </div>
  );
}

export default ProjectListItem;
