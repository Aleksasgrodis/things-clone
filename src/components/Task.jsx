import React, { useState } from 'react';
import { useDrag } from 'react-dnd';
import TaskLarge from './TaskLarge';
import TaskSmall from './TaskSmall';

function Task(props) {
  const [{ height }, drag, preview] = useDrag({
    item: { id: props.id, type: 'task' },
  });
  const [selected, setSelected] = useState(false);
  return (
    <div className="task">
      {selected ? (
        <TaskLarge {...props} setSelected={setSelected} selected={selected} />
      ) : (
        <TaskSmall
          {...props}
          drag={drag}
          setSelected={setSelected}
          selected={selected}
        />
      )}
    </div>
  );
}

export default Task;
