import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../redux/actions';
import { v4 as uuidv4 } from 'uuid';

function NewProject(props) {
  const handleNewProject = () => {

  }
  return <div>erer</div>;
}

export default connect(null, { addTodo })(NewProject);
