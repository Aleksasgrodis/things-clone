import React, { useState } from 'react';
import { useDrag } from 'react-dnd';
import TaskLarge from './TaskLarge';
import TaskSmallLogged from './TaskSmallLogged';

function TaskLogged(props) {
  const [, drag] = useDrag({
    item: { id: props.id, type: 'task' },
  });
  const [selected, setSelected] = useState(false);
  return (
    <div className="task">
      {selected ? (
        <TaskLarge {...props} setSelected={setSelected} selected={selected} />
      ) : (
        <TaskSmallLogged
          {...props}
          drag={drag}
          setSelected={setSelected}
          selected={selected}
        />
      )}
    </div>
  );
}

export default TaskLogged;
