import * as ActionTypes from '../actionTypes';
import {baseUrl} from '../../shared/baseUrl';
import axios from 'axios';

export const loginSuccess=()=>
{
    return{
        type:ActionTypes.LOGIN_SUCCESS,
        
    }
}

export const loginFailure=(error)=>
{
    return{
        type:ActionTypes.LOGIN_FAILURE,
        payload:error
    }
}



export const userLogout=()=>{
    return{
        type:ActionTypes.USER_LOGOUT
    }
}

export const userLogin=(username,password)=>dispatch=>{
    

    axios.get(baseUrl+'/users')
    .then(response=>response.data)
    .then(response=>{
               
        var UserName=response.filter(user=>user.username===username && user.password===password)[0];
        console.log(UserName);
       if(username===UserName.username && password===UserName.password)
       {
         dispatch(loginSuccess());
         
       }
       else
       {
           var error =new Error("Username & Password Incorrect")
           throw error;
       }
       
    })
    .catch(error=>{dispatch(loginFailure(error.message))})

    
}

export const userRegister=(user)=>{
    
    axios.post(baseUrl+'/users',user)
    .then(response=>response.data)
    .then(response=>{console.log(response)})
}

