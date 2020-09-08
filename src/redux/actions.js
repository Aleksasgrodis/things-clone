import * as types from './actionTypes';

export const addTodo = ({ id, createdAt, parent, heading }) => ({
  type: types.ADD_TODO,
  id,
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
