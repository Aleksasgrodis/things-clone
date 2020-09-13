import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { editTodoCompletedStatus } from '../redux/actions';
import moment from 'moment';

function TaskSmallLogged(props) {
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
        className={`small logged ${active ? 'active' : ''}`}
        ref={drag}
        onClick={() => setActive(true)}
        onDoubleClick={() => setSelected(!selected)}
      >
        <input
          type="checkbox"
          checked={props.completed}
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
        <span className="date">{moment(props.completedAt).format('DD MMM')}</span>
        <div className="text-details">
        <label htmlFor="task" className="title">
          {props.title}
        </label>
        { props.headingTitle && <span className="header">{props.headingTitle}</span>}
        </div>
        
      </div>
    </div>
  );
}

export default TaskSmallLogged
