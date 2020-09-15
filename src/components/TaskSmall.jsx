import { faCopy, faCopyright, faStickyNote } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTodoCompletedStatus } from '../redux/actions';
function TaskSmall(props) {
  const { title, id, selected, setSelected, drag } = props;
  const [active, setActive] = useState(false);
  const node = useRef();
  const dispatch = useDispatch();

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
        <input
          type="checkbox"
          checked={props.done}
          onChange={() =>
            dispatch(
              editTodoCompletedStatus({
                id: props.id,
                completedAt: Date.now(),
              }),
            )
          }
          className="checkbox"
          name="task"
          id=""
        />
        <label htmlFor="task" className="title">
          {props.title}
        </label>
        { props.notes ? <FontAwesomeIcon className="notes" icon={faCopy} /> : null}
      </div>
    </div>
  );
}

export default TaskSmall;
