// @flow
import { createReducer } from '../../redux/createReducer';

const reducerSliceName = 'dogsTestSlice';

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

export const dogsTestReducer = createReducer(reducerSliceName, initialState);
