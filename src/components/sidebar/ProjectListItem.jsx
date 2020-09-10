import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes } from '../Constants';
import { useDispatch } from 'react-redux';
import { editTodo } from '../../redux/actions';

function ProjectListItem(props) {
  const [collectedProps, drag] = useDrag({
    item: { id: props.id, type: 'project' },
  });
  const [colProps, drop] = useDrop({
    accept: [ItemTypes.TASK],
    drop: item => changeItemParent(item),
  });
  const dispatch = useDispatch();
  const changeItemParent = ({id}) => {
    dispatch(editTodo({id, parent: props.id}))
  }
  return (
    <div ref={drop}>
    <NavLink
      ref={drag}
      key={props.id}
      activeClassName="active"
      className="item thin"
      to={`/project/${props.id}`}
    >
      <FontAwesomeIcon icon={faCircle} />
      <span className="title">{props.title}</span>
    </NavLink>
    </div>
  );
}

export default ProjectListItem;
