import * as ActionTypes from '../actionTypes';

export const intialState={
    user:[],
    error:false,
    isLogin:false
}

export const userReducer=(state=intialState,action)=>{

    switch(action.type)
    {
        case ActionTypes.LOGIN_SUCCESS:
            return {...state,error:false,isLogin:true};

            case ActionTypes.LOGIN_FAILURE:
                return {...state,error:true,isLogin:false};
            
        
        case ActionTypes.USER_REGISTER:
            return{...state};

        case ActionTypes.USER_LOGOUT:
            return {...state,error:false,isLogin:false};

        default :
         return state;
    }

}