import * as Types from '../actionTypes';

const initialState = [
  {
    id: '123323',
    title: 'Project 1',
    headings: [
      { title: 'Heading 1', id: 'xyz' },
      { title: 'Heading 2', id: 'xyx' },
      { title: 'Heading 3', id: 'xyy' },
    ],
  },
  {
    id: '123325',
    title: 'Project 1',
    parent: '12233323',
    headings: [],
  },
  {
    id: '123326',
    title: 'Project 2',
    parent: '12233323',
    headings: [],
  },
  {
    id: '12332326',
    title: 'Project 1',
    parent: '1323',
    headings: [],
  },
  {
    id: '1262326',
    title: 'Project 2',
    parent: '1323',
    headings: [],
  },
  {
    id: '16032326',
    title: 'Project 3',
    parent: '1323',
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
          headings: [],
        },
      ];
    }
    case Types.EDIT_PROJECT: {
      return state.map(project => {
        if (project.id === action.id) {
          return {
            ...project,
            title: action.title ? action.title : project.title,
            parent: action.parent ? action.parent : project.parent,
            notes: action.notes ? action.notes : project.notes,
          };
        }
        return project;
      });
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
    // case Types.EDIT_HEADING: {
    //   return state.map(project => {
    //     if (project.id === action.parent) {
    //       const index = project.headings.map(h => h.id).indexOf(action.id)
    //       console.log(index)
    //       project.headings[index].title = action.title;
    //       return project;
    //     }
    //     return project;
    //   });
    // }

    default:
      return state;
  }
}
