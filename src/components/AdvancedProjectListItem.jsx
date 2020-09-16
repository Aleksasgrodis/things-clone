import React from 'react';
import { Link } from 'react-router-dom';
import { useDrag } from 'react-dnd';
import { createSelector } from 'reselect';
import { useSelector } from 'react-redux';

const selectTasksOfProject = createSelector(
  state => state.tasks,
  (_, projectID) => projectID,
  (tasks, projectID) => tasks.filter(({ parent }) => parent === projectID),
);

function AdvancedProjectListItem(props) {
  const [collectedProps, drag] = useDrag({
    item: { id: props.id, type: 'project' },
  });

  const projectTasks = useSelector(state =>
    selectTasksOfProject(state, props.id),
  );
  const activeTasks = projectTasks.filter(t => !t.completed).length
  return (
    <div className="item" ref={drag}>
      <input type="checkbox" className="checkbox" name="" id="" />
      <Link to={`/project/${props.id}`} className="title">
        {props.title}
      </Link>
      <span className="task-count">{activeTasks}</span>
    </div>
  );
}

export default AdvancedProjectListItem;
