import React from 'react';
import { ItemTypes } from './Constants';
import { useDrop } from 'react-dnd';
import Task from './Task';
import { useDispatch } from 'react-redux';
import { editTodo } from '../redux/actions';

function Heading(props) {
  const [collectedProps, drop] = useDrop({
    accept: [ItemTypes.TASK],
    drop: item => changeTaskHeader(item),
  });
  const dispatch = useDispatch();
  const changeTaskHeader = ({ id }) => {
    dispatch(editTodo({ id, heading: props.id }));
  };
  return (
    <div className="heading-wrapper" ref={drop}>
      <div
        className={`heading ${
          props.selectedHeading === props.id ? 'selected' : ''
        }`}
        onClick={() => props.setSelectedHeading(props.id)}
      >
        <p>{props.title}</p>
      </div>
      <div className="tasks">
        {props.tasks.length ? props.tasks.map(t => <Task {...t} />) : null}
      </div>
    </div>
  );
}

export default Heading;
