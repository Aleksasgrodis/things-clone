import React from 'react';
import { useDrag } from 'react-dnd';
import {ItemTypes} from './Constants';
function Task(props) {
  const [collectedProps, drag] = useDrag({
    item: {id: props.id, type: 'task' }
  })
  return (
    <div className="task" key={props.id} ref={drag}>
      <input type="checkbox" className="checkbox" name="task" id="" />
      <label htmlFor="task">{props.title}</label>
    </div>
  );
}

export default Task;
