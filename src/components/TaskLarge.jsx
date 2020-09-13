import React from 'react';
import { useDispatch } from 'react-redux';
import {
  editTodoCompletedStatus,
  editTodoDoneStatus,
  editTodoNotes,
  editTodoTitle,
} from '../redux/actions';

function TaskLarge(props) {
  const dispatch = useDispatch();
  const node = React.useRef();

  React.useEffect(() => {
    const handleClick = e => {
      if (!node.current.contains(e.target)) {
        props.setSelected(!props.setSelected);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [props]);
  return (
    <div className="large" ref={node}>
      <input
        type="checkbox"
        className="checkbox"
        checked={props.done}
        onChange={() =>
          dispatch(
            editTodoCompletedStatus({ id: props.id, completedAt: Date.now() }),
          )
        }
      />
      <div className="editables">
        <input
          type="text"
          className="title"
          placeholder="New Todo"
          value={props.title}
          onChange={e =>
            dispatch(editTodoTitle({ id: props.id, title: e.target.value }))
          }
        />
        <textarea
          className="notes"
          value={props.notes}
          placeholder="Notes"
          onChange={e =>
            dispatch(editTodoNotes({ id: props.id, notes: e.target.value }))
          }
          rows="3"
        />
        <div className="actions">buttons</div>
      </div>
    </div>
  );
}

export default TaskLarge;
