import React, { useEffect, useRef, useState } from 'react';

function TaskSmall(props) {
  const { title, id, selected, setSelected, drag } = props;
  const [active, setActive] = useState(false);
  const node = useRef();
  
  useEffect(() => {
    const handleClick = e => {
      if (!node.current.contains(e.target)) {
        setActive(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return (
    <div ref={node}>
      <div
        className={`small ${active ? 'active' : ''}`}
        ref={drag}
        onClick={() => setActive(true)}
        onDoubleClick={() => setSelected(!selected)}
      >
        <input type="checkbox" className="checkbox" name="task" id="" />
        <label htmlFor="task" className="title">
          {props.title}
        </label>
      </div>
    </div>
  );
}

export default TaskSmall;
