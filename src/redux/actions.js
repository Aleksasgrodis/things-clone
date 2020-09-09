import * as types from './actionTypes';

export const addTodo = ({ id, createdAt, parent, heading, title }) => ({
  type: types.ADD_TODO,
  id,
  title,
  createdAt,
  parent,
  heading,
});

export const addProject = ({ id, createdAt, parent }) => ({
  type: types.ADD_PROJECT,
  id,
  createdAt,
  parent,
});

export const addArea = ({ id, createdAt }) => ({
  type: types.ADD_PROJECT,
  id,
  createdAt,
});

export const addHeading = ({ id, parent, title }) => ({
  type: types.ADD_HEADING,
  id,
  parent,
  title
});
