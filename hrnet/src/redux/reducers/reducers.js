import { initialState } from '../store/store';
import { SAVE_EMPLOYEE } from '../actions/type';


export function usersReducer(state = initialState, action) {
   const { payload } = action
   switch (action.type) {
      case SAVE_EMPLOYEE:
         const newList = [...state.listEmployee]
         newList.push({...payload.employee})
         return {
            ...state,
            listEmployee : newList
         };
      default:
         return state;
   }
}