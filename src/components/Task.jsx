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
      {/* <div className={`task${selected ? ' selected' : ''}`} ref={drag} >
        <div className="brief">
          <input type="checkbox" className="checkbox" name="task" id="" />
          <label htmlFor="task" onClick={() => setSelected(!selected)}>
            {props.title}
          </label>
        </div>

        
      </div> */}
      {selected ? <TaskLarge {...props} /> : <TaskSmall {...props} drag={drag} setSelected={setSelected} selected={selected} />}
    </div>
  );
}

export default Task;
