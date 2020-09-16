import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  editTodoCompletedStatus,
  editTodoNotes,
  editTodoTitle,
} from '../redux/actions';
import onOutsideClick from './onOutsideClick';
import TaskActionBar from './TaskActionBar';

function TaskLarge({ self, target, setSelected, ...props }) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (self && target && !self.contains(target)) {
      setSelected(false);
    }
  }, [target, self, setSelected]);

  return (
    <div className="large">
      <input
        type="checkbox"
        className="checkbox"
        checked={props.completed}
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
        <TaskActionBar />
      </div>
    </div>
  );
}

export default onOutsideClick(TaskLarge);
