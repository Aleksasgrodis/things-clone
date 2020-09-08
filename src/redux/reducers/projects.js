import * as Types from '../actionTypes';

const initialState = [
  { id: '123323', title: 'I am a test project!' },
  { id: '123325', title: 'Im a project of an Area1', parent: '12233323' },
  { id: '123326', title: 'Im a different project of an Area2', parent: '12233323' },
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
        },
      ];
    }

    default:
      return state;
  }
}
