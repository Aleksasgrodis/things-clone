import React, { useState } from 'react';

function TaskSmall(props) {
  const { title, id, selected, setSelected, drag } = props;
  const [active, setActive] = useState(false)
  return (
    <div className={`small ${active ? 'active' : null}`} ref={drag} onClick={() => setActive(!active)} onDoubleClick={() => setSelected(!selected)}>
      <input type="checkbox" className="checkbox" name="task" id="" />
      <label htmlFor="task" className="title">
        {props.title}
      </label>
    </div>
  );
}

export default TaskSmall;
