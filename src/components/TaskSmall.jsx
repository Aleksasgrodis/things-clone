import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTodoCompletedStatus } from '../redux/actions';
import onOutsideClick from './onOutsideClick';
function TaskSmall({ target, self, ...props }) {
  const { title, id, selected, setSelected, drag } = props;
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (self && target && !self.contains(target)) {
      setActive(false);
    }
  }, [self, target]);

  return (
    <div>
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
        {props.notes ? (
          <FontAwesomeIcon className="notes" icon={faCopy} />
        ) : null}
      </div>
    </div>
  );
}

export default onOutsideClick(TaskSmall);
