import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createSelector } from 'reselect';
import NewTask from './NewTask';
import NewProject from './NewProject';
import { editArea } from '../redux/actions';
import Task from './Task';
import AdvancedProjectListItem from './AdvancedProjectListItem';
import NewSearch from './NewSearch';
import NewMove from './NewMove';
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
          {projects.map(project => (
            <AdvancedProjectListItem key={project.id} {...project} />
          ))}
        </div>
        <div className="tasks">
          {tasks.map(task => (
            <Task key={task.id} {...task} />
          ))}
        </div>
      </div>
      <div className="actionables">
        <NewTask parent={areaID} />
        <NewProject parent={areaID} />
        <NewMove />
        <NewSearch />
      </div>
    </div>
  );
}

export default AreaView;
