// @flow
import reducerRegistry from '../../redux/reducerRegistry';

export const reducerSliceName = 'dogsTest';
const createActionName = name => `app/${reducerSliceName}/${name}`;

export const API_CALL_REQUEST = createActionName('API_CALL_REQUEST');
export const API_CALL_SUCCESS = createActionName('API_CALL_SUCCESS');
export const API_CALL_FAILURE = createActionName('API_CALL_FAILURE');

export type HomeView = {
  loading: boolean,
  error: Object,
  dogUrl: string
};

const initialState: HomeView = {
  loading: false,
  dogUrl: '',
  error: null
};

export const reducerSlice = (state: Object = initialState, action: Object) => {
  switch (action.type) {
    case API_CALL_REQUEST:
      return { ...state, loading: true, error: null };
    case API_CALL_SUCCESS:
      return { ...state, loading: false, dogUrl: action.dogUrl.message };
    case API_CALL_FAILURE:
      return { ...state, loading: false, dogUrl: null, error: action.error };
    default:
      return state;
  }
};

reducerRegistry.register(reducerSliceName, reducerSlice);
