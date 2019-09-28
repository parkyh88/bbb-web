import { createAction, handleActions } from 'redux-actions';

const SET_MOBILE_MENU = 'header/SET_MOBILE_MENU';

export const setMobileSidebar = createAction(
  SET_MOBILE_MENU,
  isShown => !isShown,
);

const initialState = {
  isShown: false,
};

const header = handleActions(
  {
    [SET_MOBILE_MENU]: (state, { payload: isShown }) => ({ ...state, isShown }),
  },
  initialState,
);

export default header;
