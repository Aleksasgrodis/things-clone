import * as Types from '../actionTypes';

const initialState = [
  { id: '123', title: 'I am the first todo!', completed: false },
  {
    id: '12312323',
    title: 'Task with project parent 1',
    parent: '123323',
    heading: 'xyz',
    completed: false,
  },
  {
    id: '123123',
    title: 'Task with project parent 2',
    parent: '123323',
    heading: 'xyz',
    completed: false,
  },
  {
    id: '12323',
    title: 'Task with project parent 3',
    parent: '123323',
    heading: 'xyy',
    completed: false,
  },
  {
    id: '1231233153',
    title: 'Task with project parent 4',
    parent: '123323',
    notes: 'Hello, im a default note!',
    completed: true,
  },
  {
    id: '123323',
    title: 'Task with area parent 1',
    parent: '12233323',
    completed: false,
  },
  {
    id: '1235623',
    title: 'Task with area parent 2',
    parent: '12233323',
    completed: false,
  },
  {
    id: '12323534',
    title: 'Task with area parent 3',
    parent: '12233323',
    completed: false,
  },
  {
    id: '1235623423',
    title: 'Im a nested task!1',
    parent: '123325',
    completed: false,
  },
  {
    id: '12323534',
    title: 'Im a nested task!2',
    parent: '123326',
    completed: false,
  },
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
    case Types.EDIT_TODO: {
      return state.map(task => {
        if (task.id === action.id) {
          return {
            ...task,
            heading: action.heading,
            parent: action.parent,
          };
        }
        return task;
      });
    }
    case Types.EDIT_TODO_HEADING: {
      return state.map(task => {
        if (task.id === action.id) {
          return {
            ...task,
            heading: action.heading,
          };
        }
        return task;
      });
    }
    case Types.EDIT_TODO_NOTES: {
      return state.map(task => {
        if (task.id === action.id) {
          return {
            ...task,
            notes: action.notes,
          };
        }
        return task;
      });
    }
    case Types.EDIT_TODO_TITLE: {
      return state.map(task => {
        if (task.id === action.id) {
          return {
            ...task,
            title: action.title,
          };
        }
        return task;
      });
    }

    case Types.EDIT_TODO_COMPLETED_STATUS: {
      return state.map(task => {
        if (task.id === action.id) {
          return {
            ...task,
            completed: !task.completed,
            completedAt: action.completedAt,
          };
        }
        return task;
      });
    }

    default:
      return state;
  }
}
