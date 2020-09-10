import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createSelector } from 'reselect';
import NewTask from './NewTask';
import NewHeading from './NewHeading';
import { editArea, editProject } from '../redux/actions';

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
  // tasks with no headings
  const standaloneTasks = [...projectTasks].filter(t => !t.heading);
  console.log(standaloneTasks);
  // headings + headings with tasks
  const headingsWithTasks = [...headings].map(heading => ({
    ...heading,
    tasks: projectTasks.filter(task => task.heading === heading.id),
  }));
  console.log(headingsWithTasks);
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
          {standaloneTasks.map(({ title, id }) => (
            <div className="task">
              <input type="checkbox" name="" id="" />
              <p key={id}>{title}</p>
            </div>
          ))}
        </div>
        {headingsWithTasks.length
          ? headingsWithTasks.map(a => (
              <>
                <div className="heading">
                  <p>{a.title}</p>
                </div>
                {a.tasks.length
                  ? a.tasks.map(t => (
                      <div className="tasks">
                        <div className="task">
                          <input type="checkbox" name="" id="" />
                          <p key={t.id}>{t.title}</p>
                        </div>
                      </div>
                    ))
                  : null}
              </>
            ))
          : null}
      </div>
      <div className="actionables">
        <NewTask parent={projectID} heading={selectedHeading} />
        <NewHeading parent={projectID} />
        <p>s</p>
        <p>s</p>
        <p>s</p>
      </div>
    </div>
  );
}

export default ProjectView;
