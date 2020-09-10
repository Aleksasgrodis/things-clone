import * as Types from '../actionTypes';

const initialState = [
  { id: '123', title: 'I am the first todo!' },
  { id: '12312323', title: 'Task with project parent 1', parent: '123323', heading: "xyz" },
  { id: '123123', title: 'Task with project parent 2', parent: '123323', heading: "xyz" },
  { id: '12323', title: 'Task with project parent 3', parent: '123323', heading: "xyy" },
  { id: '1231233153', title: 'Task with project parent 4', parent: '123323'},
  { id: '123323', title: 'Task with area parent 1', parent: '12233323' },
  { id: '1235623', title: 'Task with area parent 2', parent: '12233323' },
  { id: '12323534', title: 'Task with area parent 3', parent: '12233323' },
  { id: '1235623', title: 'Im a nested task!1', parent: '123325' },
  { id: '12323534', title: 'Im a nested task!2', parent: '123326' },

];

export default function (state = initialState, action) {
  switch (action.type) {
    case Types.ADD_TODO: {
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          createdAt: action.createdAt,
          parent: action.parent,
          heading: action.heading,
        },
      ];
    }

    default:
      return state;
  }
}
