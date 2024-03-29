import React, { useRef } from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Switch } from 'react-router-dom';

// Importing the styles from the styles.js file.
import useStyles from './styles';
import useAlan from './Alan';

// Importing the components that will be used in the App component.
import {
  MovieInformation,
  Movies,
  Actors,
  Profile,
  NavBar,
} from '.';

// App component is the main component that holds the NavBar and the main content of the app.
const App = () => {
  const classes = useStyles();
  const alanButtonContainer = useRef();

  useAlan();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route exact path="/movie/:id">
            <MovieInformation />
          </Route>
          <Route exact path="/actors/:id">
            <Actors />
          </Route>
          <Route exact path={['/', '/approved']}>
            <Movies />
          </Route>
          <Route exact path="/profile/:id">
            <Profile />
          </Route>
        </Switch>
      </main>
      <div ref={alanButtonContainer} />
    </div>
  );
};

export default App;
