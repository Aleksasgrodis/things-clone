import React from 'react';
import { useDispatch } from 'react-redux';
import { addProject } from '../redux/actions';
import { v4 as uuidv4 } from 'uuid';
import { useHistory } from 'react-router-dom';

function NewProject(props) {
  const dispatch = useDispatch();
  const { parent, heading } = props;
  const history = useHistory();
  const handleNewProject = () => {
    const projectId = uuidv4(),
      createdAt = Date.now();
      dispatch(addProject({
        id: projectId,
        createdAt,
        parent,
        title: 'Dummy Prject Title'
      }))
      history.push(`/project/${projectId}`)
  };  
  return (
    <div>
      <button onClick={() => handleNewProject()}>New Project</button>
    </div>
  );
}

export default NewProject;
