import React from 'react';
import { useDispatch } from 'react-redux';
import { addArea } from '../redux/actions';
import { v4 as uuidv4 } from 'uuid';
import { useHistory } from 'react-router-dom';

function NewArea(props) {
  const dispatch = useDispatch();
  const { parent, heading } = props;
  const history = useHistory();
  const handleNewArea = () => {
    const areaId = uuidv4(),
      createdAt = Date.now();
    dispatch(
      addArea({
        id: areaId,
        createdAt,
        title: 'New Area',
      }),
    );
    history.push(`/area/${areaId}`);
  };
  return (
    <div>
      <button onClick={() => handleNewArea()}>New Project</button>
    </div>
  );
}

export default NewArea;
