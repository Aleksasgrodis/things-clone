import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions';
import { v4 as uuidv4 } from 'uuid';

function NewTask(props) {
  const dispatch = useDispatch();
  const handleNewTask = () => {
    const taskId = uuidv4(),
      createdAt = Date.now();
    const { parent, heading } = props;
    dispatch(
      addTodo({
        id: taskId,
        createdAt: createdAt,
        heading: heading && heading.id,
        headingTitle: heading && heading.title,
        title: 'Dummy Task',
        parent: parent,
      }),
    );
  };
  return (
    <div>
      <button
        onClick={() => handleNewTask()}
      >
        New Task
      </button>
    </div>
  );
}

export default NewTask;
