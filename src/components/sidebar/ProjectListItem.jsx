import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes } from '../Constants';
import { useDispatch, useSelector } from 'react-redux';
import { editTodo } from '../../redux/actions';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import { createSelector } from 'reselect';

const selectTasksOfProject = createSelector(
  state => state.tasks,
  (_, projectID) => projectID,
  (tasks, projectID) => tasks.filter(({ parent }) => parent === projectID),
);

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

  const projectTasks = useSelector(state =>
    selectTasksOfProject(state, props.id),
  );
  const completedTasks = [...projectTasks].filter(t => t.completed);
  const percentage = (completedTasks.length * 100) / projectTasks.length;
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
              value={percentage}
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
