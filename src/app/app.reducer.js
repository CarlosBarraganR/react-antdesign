// @flow
import reducerRegistry from '../redux/reducerRegistry';

export const reducerSliceName = 'appLayout';
const createActionName = name => `app/${reducerSliceName}/${name}`;

export const SET_HEADER_TITLE = createActionName('SET_HEADER_TITLE');
export const SET_HEADER_TITLE_SUCCESS = createActionName(
  'SET_HEADER_TITLE_SUCCESS'
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
  headerTitle: string,
  isViewResponsive: boolean,
  siderCollapsed: boolean
};

const initialState: AppLayout = {
  headerTitle: '',
  isViewResponsive: false,
  siderCollapsed: false
};

export const reducerSlice = (state: Object = initialState, action: Object) => {
  switch (action.type) {
    case SET_HEADER_TITLE_SUCCESS:
      return { ...state, headerTitle: action.payload };
    case SET_LAYOUT_RESPONSIVE_SUCCESS:
      return { ...state, isViewResponsive: action.payload };
    case SET_SIDER_COLLAPSED_SUCCESS:
      return { ...state, siderCollapsed: action.payload };
    default:
      return state;
  }
};

reducerRegistry.register(reducerSliceName, reducerSlice);
