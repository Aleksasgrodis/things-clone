import React from 'react';
import { useDispatch } from 'react-redux';
import { addHeading } from '../redux/actions';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeading } from '@fortawesome/free-solid-svg-icons';

function NewHeading(props) {
  const dispatch = useDispatch();
  const handleNewHeading = () => {
    const headingID = uuidv4();
    const { parent } = props;
    dispatch(
      addHeading({
        id: headingID,
        title: 'Dummy Heading',
        parent: parent,
      }),
    );
  };
  return (
    <button className="action" onClick={() => handleNewHeading()}>
      <FontAwesomeIcon icon={faHeading} />
    </button>
  );
}

export default NewHeading;
