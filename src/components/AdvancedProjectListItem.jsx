import React from 'react';
import { Link } from 'react-router-dom';
import { useDrag } from 'react-dnd';
import { createSelector } from 'reselect';
import { useSelector } from 'react-redux';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';

const selectTasksOfProject = createSelector(
  state => state.tasks,
  (_, projectID) => projectID,
  (tasks, projectID) => tasks.filter(({ parent }) => parent === projectID),
);

function AdvancedProjectListItem(props) {
  const [, drag] = useDrag({
    item: { id: props.id, type: 'project' },
  });

  const projectTasks = useSelector(state =>
    selectTasksOfProject(state, props.id),
  );
  const activeTasks = projectTasks.filter(t => !t.completed).length;
  const completedTasks = [...projectTasks].filter(t => t.completed);
  const percentage = (completedTasks.length * 100) / projectTasks.length 
  return (
    <div className="item" ref={drag}>
      <div className="progress-indicator small colored">
          <CircularProgressbar
            value={percentage}
            strokeWidth={50}
            styles={buildStyles({
              strokeLinecap: 'butt',
            })}
          />
        </div>
      <Link to={`/project/${props.id}`} className="title">
        {props.title}
      </Link>
      <span className="task-count">{activeTasks}</span>
    </div>
  );
}

export default AdvancedProjectListItem;
