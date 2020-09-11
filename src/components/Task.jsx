import React, { useState } from 'react';
import { useDrag } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { editTodoNotes } from '../redux/actions';
function Task(props) {
  const [collectedProps, drag] = useDrag({
    item: {id: props.id, type: 'task' }
  })
  const [selected, setSelected] = useState(false)
  const dispatch = useDispatch();
  return (
    <div className={`task${ selected ? ' selected': ""}`} ref={drag} >
      <div className="brief">

      <input type="checkbox" className="checkbox" name="task" id="" />
      <label htmlFor="task" onClick={() => setSelected(!selected)}>{props.title}</label>
      </div>
      <div className="extension">
        <textarea name="" id="" value={props.notes} placeholder="Notes" onChange={(e) => dispatch(editTodoNotes({id: props.id, notes: e.target.value}))} rows="4" />
        <div className="actions">buttons</div>
      </div>
    </div>
  );
}

export default Task;
