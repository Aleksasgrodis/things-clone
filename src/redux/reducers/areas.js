import * as Types from '../actionTypes';

const initialState = [{ id: '12233323', title: 'Look at me, I am an area!' }];

export default function (state = initialState, action) {
  switch (action.type) {
    case Types.ADD_AREA: {
      return [
        ...state,
        {
          id: action.id,
          createdAt: action.createdAt,
          title: action.title
        },
      ];
    }

    default:
      return state;
  }
}
