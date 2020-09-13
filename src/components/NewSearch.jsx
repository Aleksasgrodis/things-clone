import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions';
import { v4 as uuidv4 } from 'uuid';
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function NewSearch(props) {
  // const dispatch = useDispatch();
  // const handleNewTask = () => {
  //   const taskId = uuidv4(),
  //     createdAt = Date.now();
  //   const { parent, heading } = props;
  //   dispatch(
  //     addTodo({
  //       id: taskId,
  //       createdAt: createdAt,
  //       heading: heading && heading.id,
  //       headingTitle: heading && heading.title,
  //       title: 'Dummy Task',
  //       parent: parent,
  //     }),
  //   );
  // };
  return (
    <button className="action">
      <FontAwesomeIcon icon={faSearch} />
    </button>
  );
}

export default NewSearch;
