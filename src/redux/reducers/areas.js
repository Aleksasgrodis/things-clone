import * as Types from '../actionTypes';

const initialState = [
  { id: '12233323', title: 'Area1' },
  { id: '132', title: 'Area2' },
  { id: '1323', title: 'Area3' },
];

export default function (state = initialState, action) {
  switch (action.type) {
    case Types.ADD_AREA: {
      return [
        ...state,
        {
          id: action.id,
          createdAt: action.createdAt,
          title: action.title,
        },
      ];
    }
    case Types.EDIT_AREA: {
      return state.map(area => {
        if (area.id === action.id) {
          return {
            ...area,
            title: action.title,
          };
        }
        return area;
      });
    }

    default:
      return state;
  }
}
