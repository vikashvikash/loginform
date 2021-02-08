import React, { Fragment, useEffect } from 'react';
import {useHistory } from 'react-router-dom';
import{useSelector, useDispatch,connect} from 'react-redux';
import{userLogout} from '../../redux/actions/actionCreators';
import styled from 'styled-components';
import{Button} from '../../components/Button';



const Title = styled.h1`
  font-size: 1em;
  margin:100px 400px;
  background-color:cyan;
  padding:100px 200px;
  color:green;
`;


 const LoginPage=()=>{
    const history=useHistory();
    const dispatch=useDispatch();
    var loginStatus=useSelector(state=>state.isLogin);

  const Logout=(event)=>{
                dispatch(userLogout());
            }
  useEffect(()=>{
        if(!loginStatus)
        {
            history.push('/')
        }
    },[loginStatus]);

    return(<Fragment><Title>
    <h2>WellCome to Login Page</h2>
    <Button type="button" onClick={Logout}>Logout</Button>
   </Title> </Fragment>);
}
export default LoginPage;