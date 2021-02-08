import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import styled from 'styled-components';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { Provider } from 'react-redux';
import { configureStore } from './redux/configureStore';


const store = configureStore();

const MainContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
 transform: translate(-50%, -50%);
`;


const App = () => {
  return (<MainContainer>
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/login" component={LoginPage}></Route>
        <Route exact path="/register" component={RegisterPage}></Route>
      </BrowserRouter>
    </Provider>
  </MainContainer>
  );
}

export default App;
