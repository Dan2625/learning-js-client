import { Fragment } from 'react';
import Navigation from './Navigation';

import classes from './Layout.module.css';

const Layout = (props) => {
  return (
    <Fragment>
      <Navigation
        isLoggedIn={props.isAuthenticated}
        onLogout={props.onLogout}
      />
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
