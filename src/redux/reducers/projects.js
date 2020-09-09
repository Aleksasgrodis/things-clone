import * as Types from '../actionTypes';

const initialState = [
  { id: '123323', title: 'I am a test project!', headings: [] },
  {
    id: '123325',
    title: 'Im a project of an Area1',
    parent: '12233323',
    headings: [],
  },
  {
    id: '123326',
    title: 'Im a different project of an Area2',
    parent: '12233323',
    headings: [],
  },
];

export default function (state = initialState, action) {
  switch (action.type) {
    case Types.ADD_PROJECT: {
      return [
        ...state,
        {
          id: action.id,
          createdAt: action.createdAt,
          parent: action.parent,
          title: action.title,
          headings: []
        },
      ];
    }
    case Types.ADD_HEADING: {
      return state.map(project => {
        if (project.id === action.parent) {
          return {
            ...project,
            headings: [
              ...project.headings,
              {
                id: action.id,
                title: action.title,
              },
            ],
          };
        }
        return project;
      });
    }

    default:
      return state;
  }
}
