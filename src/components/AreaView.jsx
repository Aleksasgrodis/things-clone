import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { createSelector } from 'reselect';
import NewTask from './NewTask';
import NewProject from './NewProject';

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
  const {title, tags } = useSelector(state =>
    selectAreaWithId(state, areaID),
  );
  const projects = useSelector(state =>
    selectProjectsOfArea(state, areaID),
  );
  const tasks = useSelector(state =>
    selectTasksOfArea(state, areaID),
  );

  return (
    <div className="content">
      <div className="area">
      <header>

        <h2>{title}</h2>
      </header>
      {projects.map(({title, id}) => (<Link to={`/project/${id}`} key={id}><p>{title}</p></Link>))}
      {tasks.map(({title, id}) => (<p key={id}>{title}</p>))}
      
      asdsad
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
