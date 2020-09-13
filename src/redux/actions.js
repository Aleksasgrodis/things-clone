import * as types from './actionTypes';

export const addTodo = ({ id, createdAt, parent, heading, title, headingTitle }) => ({
  type: types.ADD_TODO,
  id,
  title,
  createdAt,
  parent,
  heading,
  headingTitle,
});

export const editTodo = ({ id, parent, heading, title }) => ({
  type: types.EDIT_TODO,
  id,
  title,
  parent,
  heading,
});

export const editTodoHeading = ({ id, heading, headingTitle }) => ({
  type: types.EDIT_TODO_HEADING,
  id,
  heading,
  headingTitle,
});
export const editTodoNotes = ({ id, notes }) => ({
  type: types.EDIT_TODO_NOTES,
  id,
  notes,
});

export const editTodoTitle = ({ id, title }) => ({
  type: types.EDIT_TODO_TITLE,
  id,
  title,
});
export const editTodoCompletedStatus = ({ id, completedAt }) => ({
  type: types.EDIT_TODO_COMPLETED_STATUS,
  id,
  completedAt,
});

export const addProject = ({ id, createdAt, title, parent }) => ({
  type: types.ADD_PROJECT,
  id,
  createdAt,
  parent,
  title,
});

export const editProject = ({ id, title, parent, notes }) => ({
  type: types.EDIT_PROJECT,
  id,
  parent,
  title,
  notes,
});

export const addArea = ({ id, createdAt, title }) => ({
  type: types.ADD_AREA,
  id,
  createdAt,
  title,
});
export const editArea = ({ id, title, tags }) => ({
  type: types.EDIT_AREA,
  id,
  tags,
  title,
});

export const addHeading = ({ id, parent, title }) => ({
  type: types.ADD_HEADING,
  id,
  parent,
  title,
});

export const editHeading = ({ id, parent, title }) => ({
  type: types.EDIT_HEADING,
  id,
  parent,
  title,
});
