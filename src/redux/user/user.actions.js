// actions: a pure object with 2 properties : type of action and  payload 
import {userActionTypes} from './user.types';
export const setCurrentUser =(user)=> ({
    type:userActionTypes.SET_CURRENT_USER,
    payload:user // parameter's value 
})