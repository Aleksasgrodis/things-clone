import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { editTodoCompletedStatus } from '../redux/actions';
import moment from 'moment';
import onOutsideClick from './onOutsideClick';

function TaskSmallLogged({self, target,...props}) {
  const { title, id, selected, setSelected, drag } = props;
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (self && target && !self.contains(target)) setActive(false)
  }, [self, target])

  return (
    <div>
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

export default onOutsideClick(TaskSmallLogged)
