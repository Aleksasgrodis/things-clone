import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createSelector } from 'reselect';
import NewTask from './NewTask';
import NewHeading from './NewHeading';

const selectProjectWithId = createSelector(
  state => state.projects,
  (_, projectID) => projectID,
  (projects, projectID) => projects.find(({ id }) => id === projectID),
);

const selectTasksOfProject = createSelector(
  state => state.tasks,
  (_, projectID) => projectID,
  (tasks, projectID) => tasks.filter(({ parent }) => parent === projectID),
);

function ProjectView(props) {
  const { projectID } = useParams();
  const [selectedHeading, setSelectedHeading] = useState(null);
  const projectTasks = useSelector(state =>
    selectTasksOfProject(state, projectID),
  );
  const { title, headings, tags, notes } = useSelector(state =>
    selectProjectWithId(state, projectID),
  );
  return (
    <div>
      <h2>{title}</h2>
      <span>{tags}</span>
      <span>{notes}</span>
      {headings.length && headings.map(a => (<p>{a.title}</p>))}
      {projectTasks.map(({ title, id }) => (
        <p key={id}>{title}</p>
      ))}
      <NewTask parent={projectID} heading={selectedHeading} />
      <NewHeading parent={projectID} />
    </div>
  );
}

export default ProjectView;
