import React from 'react';
import { useDispatch } from 'react-redux';
import { editTodoNotes, editTodoTitle } from '../redux/actions';

function TaskLarge(props) {
  const dispatch = useDispatch();

  return (
    <div className="large">
      <input type="checkbox" className="checkbox" name="task" id="" />
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
