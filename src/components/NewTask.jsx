import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../redux/actions';
import { v4 as uuidv4 } from 'uuid';

function NewTask(props) {
  // create id on render or on click?
  const dispatch = useDispatch();
  const handleNewTask = () => {
    const taskId = uuidv4(),
      createdAt = Date.now();
    const { parent, heading } = props;
    console.log(parent);
    dispatch(
      addTodo({
        id: taskId,
        createdAt: createdAt,
        heading: heading,
        parent: parent,
      }),
    );
  };
  return (
    <div>
      <button onClick={() => handleNewTask()}>Click me</button>
    </div>
  );
}

export default NewTask;
