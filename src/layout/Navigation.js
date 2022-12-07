import { NavLink } from 'react-router-dom';

import classes from './Navigation.module.css';

const Navigation = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Learning JS!</div>
      <nav className={classes.nav}>
        <ul>
          {props.isLoggedIn && (
            <li>
              <NavLink to="/lobby" activeClassName={classes.active}>
                Lobby
              </NavLink>
            </li>
          )}
          {props.isLoggedIn && (
            <li>
              <button onClick={props.onLogout}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
