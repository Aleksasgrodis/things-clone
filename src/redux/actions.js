import * as types from './actionTypes';

export const addTodo = ({ id, createdAt, parent, heading, title }) => ({
  type: types.ADD_TODO,
  id,
  title,
  createdAt,
  parent,
  heading,
});

export const addProject = ({ id, createdAt, title, parent }) => ({
  type: types.ADD_PROJECT,
  id,
  createdAt,
  parent,
  title,
});

export const editProject = ({ id, title, parent }) => ({
  type: types.EDIT_PROJECT,
  id,
  parent,
  title,
});

export const addArea = ({ id, createdAt, title }) => ({
  type: types.ADD_AREA,
  id,
  createdAt,
  title
});
export const editArea = ({ id, title, tags }) => ({
  type: types.EDIT_AREA,
  id,
  tags,
  title
});

export const addHeading = ({ id, parent, title }) => ({
  type: types.ADD_HEADING,
  id,
  parent,
  title
});
