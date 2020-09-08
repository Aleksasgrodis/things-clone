import { combineReducers } from 'redux';
import tasks from './tasks';
import projects from './projects';
import areas from './areas';

export default combineReducers({ tasks, projects, areas })