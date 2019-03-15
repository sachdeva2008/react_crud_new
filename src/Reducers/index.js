import { combineReducers } from 'redux';
import DashboardReducer from './dashboardReducer';

const rootReducer = combineReducers({    
    dataset: DashboardReducer
});

export default rootReducer;