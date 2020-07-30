import {userActionTypes} from './user.types';
const INTITAL_STATE = {
    currentUser:null
}
const userReducer = (state = INTITAL_STATE, action) => {
    switch (action.type) {
        case userActionTypes.SET_CURRENT_USER: // day chinh la y tuong cho khai bao user.types.js
            return {
                ...state, 
                currentUser:action.payload
            };
        default:
            return state;
    }
}

export default userReducer;