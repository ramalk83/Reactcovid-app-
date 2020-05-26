import * as redux from 'redux';
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';

export const COUNTINC='counter/increment';
export const COUNTDEC='counter/decrement';

const countstate={
    count : 0
}

/*const countReducer=(state = countstate,action)=>{
switch(action.type){
    case 'counter/increment' : {
        return {...state, count: state.count+1};
        break;
    }
    case 'counter/decrement':{
        return {...state,count: state.count-1};
        break;
    }
    default:{
        return state;
    }
 }
}*/

const rootReducer=redux.combineReducers({
   /* counter:countReducer,*/
    form:formReducer,
});

const store= redux.createStore(rootReducer,redux.applyMiddleware(thunk));
export default store;
