import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createSelector } from 'reselect';
import NewTask from './NewTask';
import NewHeading from './NewHeading';
import { editProject } from '../redux/actions';
import Task from './Task';
import Heading from './Heading';

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
  const dispatch = useDispatch();
  const projectTasks = useSelector(state =>
    selectTasksOfProject(state, projectID),
  );
  const { title, headings, tags, notes } = useSelector(state =>
    selectProjectWithId(state, projectID),
  );
  const standaloneTasks = [...projectTasks].filter(t => !t.heading);
  const headingsWithTasks = [...headings].map(heading => ({
    ...heading,
    tasks: projectTasks.filter(task => task.heading === heading.id),
  }));
  useEffect(() => {
    setSelectedHeading(null);
  }, [projectID]);
  return (
    <div className="content">
      <div className="project">
        <header>
          <input
            className="input-title"
            type="text"
            name="title"
            placeholder="New Project"
            value={title}
            onChange={e =>
              dispatch(editProject({ id: projectID, title: e.target.value }))
            }
          />
          <textarea
            className="input-notes"
            placeholder="Notes"
            value={notes && notes.length ? notes : ''}
            onChange={e =>
              dispatch(editProject({ id: projectID, notes: e.target.value }))
            }
          />
        </header>
        <span>{tags}</span>

        <div className="tasks">
          {standaloneTasks.map(task => (
            <Task key={task.id} {...task} />
          ))}
        </div>
        {headingsWithTasks.length
          ? headingsWithTasks.map(a => (
              <Heading
              key={a.id}
                {...a}
                selectedHeading={selectedHeading}
                setSelectedHeading={setSelectedHeading}
              />
            ))
          : null}
      </div>
      <div className="actionables">
        <NewTask parent={projectID} heading={selectedHeading} />
        <NewHeading parent={projectID} />
      </div>
    </div>
  );
}

export default ProjectView;
