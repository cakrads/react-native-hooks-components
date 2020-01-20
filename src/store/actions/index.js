import * as TYPE from './type';
import AsyncStorage from '@react-native-community/async-storage';

export const setFinishedOnboarding = value => {
  return async (dispatch, getState) => {
    dispatch({
      type: TYPE.SET_FINISHED_ONBOARDING,
    });
    console.log('finishedboarding', getState().globalReducer);
  };
};

export const setDarkTheme = () => {
  return async (dispatch, getState) => {
    await dispatch({
      type: TYPE.SET_DARK_THEME,
      data: !getState().globalReducer.isDarkTheme,
    });
    console.log('setDarkTheme', getState().globalReducer);
  };
};
