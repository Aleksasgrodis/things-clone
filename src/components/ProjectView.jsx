import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { useParams } from 'react-router-dom';

function ProjectView(props) {
  const { projectID } = useParams();
  const {
    project: { title, headings, tags, notes },
    tasks,
  } = useSelector(state => ({
    project: state.projects.find(({ id }) => id === projectID),
    tasks: state.tasks.filter(({ parent }) => parent === projectID),
  }), shallowEqual);
  return (
    <div>
      {title}
      {headings}
      {tasks.map(({title, id}) => (<p key={id}>{title}</p>))}
    </div>
  );
}

export default ProjectView;
