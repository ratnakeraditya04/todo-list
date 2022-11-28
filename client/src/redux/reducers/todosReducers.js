import * as actionTypes from '../actions/type' ;

// State's initial value should be defined as an empty array.
export const todosReducers = (state = [] , action) => {
// Actually , it sholud have a switch present here. 

    switch(action.type){
        case actionTypes.ADDNEW_TODO:
            return [action.payload, ...state]
        default:
            return state;
    }
    // return [] ;

    

};