import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowDown,
  faArrowRight,
  faBoxOpen,
  faChevronCircleDown,
  faChevronDown,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import ProjectListItem from './ProjectListItem';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../Constants';
import { useDispatch } from 'react-redux';
import { editTodo, editProject } from '../../redux/actions';

function AreaListItem(props) {
  const [collapsed, setCollapsed] = useState(false);
  const [{ isActive }, drop] = useDrop({
    accept: [ItemTypes.TASK, ItemTypes.PROJECT],
    drop: item => changeItemParent(item),
    collect: monitor => ({
      isActive: monitor.canDrop() && monitor.isOver(),
    }),
  });
  const dispatch = useDispatch();

  const changeItemParent = item => {
    if (item.type === 'project') {
      const { id } = item;
      dispatch(editProject({ id, parent: props.id }));
    }
    if (item.type === 'task') {
      const { id } = item;
      dispatch(editTodo({ id, parent: props.id }));
    }
  };
  return (
    <div className="project-bundle">
      <NavLink
        ref={drop}
        activeClassName="active"
        className={`item ${isActive ? 'droppable' : null}`}
        to={`/area/${props.id}`}
      >
        <div className="parent-details">
          <div className="text">
            <FontAwesomeIcon icon={faBoxOpen} />
            <span className="title">{props.title}</span>
          </div>

          {collapsed ? (
            <FontAwesomeIcon
              className="chevron"
              icon={faChevronRight}
              onClick={() => setCollapsed(!collapsed)}
            />
          ) : (
            <FontAwesomeIcon
              className="chevron"
              icon={faChevronDown}
              onClick={() => setCollapsed(!collapsed)}
            />
          )}
        </div>
      </NavLink>
      <div style={{ display: collapsed ? 'none' : 'contents' }}>
        {props.children && props.children.length
          ? props.children.map(c => <ProjectListItem key={c.id} {...c} />)
          : null}
      </div>
    </div>
  );
}

export default AreaListItem;
