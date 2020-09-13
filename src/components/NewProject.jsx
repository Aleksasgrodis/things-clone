import React from 'react';
import { useDispatch } from 'react-redux';
import { addProject } from '../redux/actions';
import { v4 as uuidv4 } from 'uuid';
import { useHistory } from 'react-router-dom';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function NewProject(props) {
  const dispatch = useDispatch();
  const { parent, heading } = props;
  const history = useHistory();
  const handleNewProject = () => {
    const projectId = uuidv4(),
      createdAt = Date.now();
    dispatch(
      addProject({
        id: projectId,
        createdAt,
        parent,
        title: 'New Project',
      }),
    );
    history.push(`/project/${projectId}`);
  };
  return (
    <button className="action" onClick={() => handleNewProject()}>
      <FontAwesomeIcon icon={faPlusCircle} />
    </button>
  );
}

export default NewProject;
