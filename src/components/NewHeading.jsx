import React from 'react';
import { useDispatch } from 'react-redux';
import { addHeading } from '../redux/actions';
import { v4 as uuidv4 } from 'uuid';

function NewHeading(props) {
  // create id on render or on click?
  const dispatch = useDispatch();
  const handleNewHeading = () => {
    const headingID = uuidv4();
    const { parent } = props;
    console.log(parent);
    dispatch(
      addHeading({
        id: headingID,
        title: 'Dummy Heading',
        parent: parent,
      }),
    );
  };
  return (
    <div>
      <button onClick={() => handleNewHeading()}>New Heading</button>
    </div>
  );
}

export default NewHeading;
