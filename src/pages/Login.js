import { useState, useEffect } from 'react';

import Card from '../components/UI/Card';
import Button from '../components/UI/Button';
import classes from './Login.module.css';

const Login = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [usernameIsValid, setUsernameIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(
        enteredUsername.trim().length > 1 && enteredPassword.trim().length > 6
      );
    }, 500);
    return () => {
      clearTimeout(identifier);
    };
  }, [enteredUsername, enteredPassword]);

  //CHANGING USERNAME AND PASSWORD VIA INPUTS

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  // VALIDATE INPUTS

  const validateUsernameHandler = () => {
    setUsernameIsValid(enteredUsername.trim().length > 1);
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredUsername, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            usernameIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="username">username</label>
          <input
            type="name"
            id="username"
            value={enteredUsername}
            onChange={usernameChangeHandler}
            onBlur={validateUsernameHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
