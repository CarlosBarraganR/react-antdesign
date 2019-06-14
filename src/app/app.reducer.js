// @flow
import reducerRegistry from '../redux/reducerRegistry';

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

export type AppLayout = {
  isViewResponsive: boolean,
  siderCollapsed: boolean,
  drawerOpen: boolean
};

const initialState: AppLayout = {
  isViewResponsive: false,
  siderCollapsed: false,
  drawerOpen: false
};

export const reducerSlice = (state: Object = initialState, action: Object) => {
  switch (action.type) {
    case SET_DRAWER_OPEN_SUCCESS:
      return { ...state, drawerOpen: action.payload };
    case SET_LAYOUT_RESPONSIVE_SUCCESS:
      return { ...state, isViewResponsive: action.payload };
    case SET_SIDER_COLLAPSED_SUCCESS:
      return { ...state, siderCollapsed: action.payload };
    default:
      return state;
  }
};

reducerRegistry.register(reducerSliceName, reducerSlice);
