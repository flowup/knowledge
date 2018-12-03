import { ActionReducerMap } from '@ngrx/store';
import { AppStateModel } from '../models/app-state.model';
import { messageReducer } from './message.reducer';

export const REDUCERS: ActionReducerMap<AppStateModel> = {
  messages: messageReducer,
};
