import * as Types from '../actionTypes';

const initialState = [{ id: '123323', title: 'I am a test project!' }];

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
