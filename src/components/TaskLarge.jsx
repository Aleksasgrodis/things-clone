import React from 'react';
import { useDispatch } from 'react-redux';
import { editTodoNotes } from '../redux/actions';

function TaskLarge(props) {
  const dispatch = useDispatch();

  return (
    <div className="large">
      <input type="checkbox" className="checkbox" name="task" id="" />
      <div className="editables">
        <input type="text" className="title" value={props.title} />
        <textarea
         className="notes"
          name=""
          id=""
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
