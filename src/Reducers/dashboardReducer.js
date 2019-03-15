import { DATA_SET} from '../Actions/Types';

const DashboardReducer = (state = {}, action) => {
switch(action.type) {
   case DATA_SET:        
   return { ...state, dataset: action.payload};          
   default:
     return state;
 }
}

export default DashboardReducer;