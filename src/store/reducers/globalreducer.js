import * as TYPES from '../actions/type';
import {globalState} from './state';

const globalReducer = (state = globalState, action) => {
  switch (action.type) {
    case TYPES.SET_DEFAULT:
      return globalState;
    case TYPES.SET_DARK_THEME:
      return {
        ...state,
        isDarkTheme: action.data,
      };
  }
  return state;
};

export default globalReducer;
