import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { createSelector } from 'reselect';
import NewTask from './NewTask';
import NewProject from './NewProject';
import { editArea } from '../redux/actions';
import Task from './Task';
const selectAreaWithId = createSelector(
  state => state.areas,
  (_, areaID) => areaID,
  (areas, areaID) => areas.find(({ id }) => id === areaID),
);

const selectTasksOfArea = createSelector(
  state => state.tasks,
  (_, areaID) => areaID,
  (tasks, areaID) => tasks.filter(({ parent }) => parent === areaID),
);

const selectProjectsOfArea = createSelector(
  state => state.projects,
  (_, areaID) => areaID,
  (projects, areaID) => projects.filter(({ parent }) => parent === areaID),
);

function AreaView(props) {
  const { areaID } = useParams();
  const dispatch = useDispatch();
  const [newTitle, setNewTitle] = useState(null);
  const { title, tags } = useSelector(state => selectAreaWithId(state, areaID));
  const projects = useSelector(state => selectProjectsOfArea(state, areaID));
  const tasks = useSelector(state => selectTasksOfArea(state, areaID));

  return (
    <div className="content">
      <div className="area">
        <header>
          <input
            className="input-title"
            type="text"
            name="title"
            placeholder="New Area"
            value={title}
            onChange={e =>
              dispatch(editArea({ id: areaID, title: e.target.value }))
            }
          />
        </header>
        <div className="projects">
          {projects.map(({ title, id }) => (
            <div key={id} className="item">
              <input type="checkbox" className="checkbox" name="" id=""/>
              <Link to={`/project/${id}`} className="title">
                {title}
              </Link>
              <span className="task-count">4</span>
            </div>
          ))}
        </div>
        {tasks.map(task => (
          <Task {...task} />
        ))}
      </div>
      <div className="actionables">
        <NewTask parent={areaID} />
        <NewProject parent={areaID} />
        <p>s</p>
      </div>
    </div>
  );
}

export default AreaView;
