// @flow
import reducerRegistry from '../redux/reducerRegistry';
import SessionManager from '../session-manager/SessionManager';

export const reducerSliceName = 'appLayout';
const createActionName = name => `app/${reducerSliceName}/${name}`;

export const SET_DRAWER_OPEN = createActionName('SET_DRAWER_OPEN');
export const SET_DRAWER_OPEN_SUCCESS = createActionName(
  'SET_DRAWER_OPEN_SUCCESS'
);
export const SET_LAYOUT_RESPONSIVE = createActionName('SET_LAYOUT_RESPONSIVE');
export const SET_LAYOUT_RESPONSIVE_SUCCESS = createActionName(
  'SET_LAYOUT_RESPONSIVE_SUCCESS'
);
export const SET_SIDER_COLLAPSED = createActionName('SET_SIDER_COLLAPSED');
export const SET_SIDER_COLLAPSED_SUCCESS = createActionName(
  'SET_SIDER_COLLAPSED_SUCCESS'
);
export const USER_LOGIN = createActionName('USER_LOGIN');
export const USER_LOGIN_SUCCESS = createActionName('USER_LOGIN_SUCCESS');
export const USER_LOGIN_FAILURE = createActionName('USER_LOGIN_FAILURE');

export type AppLayout = {
  loading: boolean,
  error: ?Object,
  isViewResponsive: boolean,
  siderCollapsed: boolean,
  drawerOpen: boolean,
  user: ?{
    id: string,
    name: string,
    accessToken: string,
    ttl: number
  }
};

const initialState: AppLayout = {
  loading: false,
  error: null,
  isViewResponsive: false,
  siderCollapsed: false,
  drawerOpen: false,
  user: null
};

export const reducerSlice = (state: Object = initialState, action: Object) => {
  switch (action.type) {
    case SET_DRAWER_OPEN_SUCCESS:
      return { ...state, drawerOpen: action.payload };
    case SET_LAYOUT_RESPONSIVE_SUCCESS:
      return { ...state, isViewResponsive: action.payload };
    case SET_SIDER_COLLAPSED_SUCCESS:
      return { ...state, siderCollapsed: action.payload };
    case USER_LOGIN:
      return { ...state, loading: true };
    case USER_LOGIN_SUCCESS:
      // SessionManager.saveSession(action.user);
      return { ...state, loading: false, user: action.payload, error: false };
    case USER_LOGIN_FAILURE:
      return { ...state, loading: false, user: null, error: action.payload };
    default:
      return state;
  }
};

reducerRegistry.register(reducerSliceName, reducerSlice);
