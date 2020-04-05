import { combineReducers } from 'redux';
import { modal } from './modal';
import { skills } from './skills';

export const rootReducer = combineReducers({ modal, skills });
