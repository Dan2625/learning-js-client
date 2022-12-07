import { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';

import Layout from './layout/Layout';
import Login from './pages/Login';
import Lobby from './pages/Lobby';
import ProtectedRoutes from './components/UI/ProtectedRoutes';

const cookies = new Cookies();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  /*   useEffect(() => {
    const userInfo = localStorage.getItem('isLoggedIn');

    if (userInfo === '1') {
      setIsLoggedIn(true);
    }
  }, []); */

  // CONNECT AND CONFIGURATION WITH SERVER

  const loginHandler = (username, password) => {
    const configuration = {
      method: 'post',
      url: 'https://dan-nodejs-mongodb.herokuapp.com/login',
      data: {
        username,
        password,
      },
    };
    axios(configuration)
      .then((result) => {
        setIsLoggedIn(true);
        cookies.set('TOKEN', result.data.token, {
          path: '/',
        });
        window.location.href = '/lobby';
      })
      .catch((error) => {
        error = new Error();
      });
  };

  //FOR NOW WITH LOCAL HOST

  /*   const loginHandler = (username, password) => {
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  }; */

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };
  console.log({ isLoggedIn });
  return (
    <Layout isAuthenticated={isLoggedIn} onLogout={logoutHandler}>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/login" />
        </Route>
        <Route path="/login">
          <Login onLogin={loginHandler} />
        </Route>
        <ProtectedRoutes path="/lobby" component={Lobby} />
        <Route path="*">not found</Route>
      </Switch>
      {/* <Switch>
        <Route path="/" exact>
          <Redirect to="/login" />
        </Route>
        <Route path="/login">
          {!isLoggedIn ? (
            <Login onLogin={loginHandler} />
          ) : (
            <Redirect to="/lobby" />
          )}
        </Route>
        <Route path="/lobby">
          {isLoggedIn && <Lobby onLogout={logoutHandler} />}
        </Route>
        <Route path="*">not found</Route>
      </Switch> */}
    </Layout>
  );
}

export default App;
