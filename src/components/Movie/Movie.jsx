import React from 'react';
import { Typography, Grid, Grow, Tooltip, Rating } from '@mui/material';
import { Link } from 'react-router-dom';

import useStyles from './styles';

const Movie = ({ movie, i }) => {
  const classes = useStyles();
  //* We are using this page to get movie title and image from the API and display it on the screen
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className={classes.movie}/* We are using grid to give a slight animation and timeout for rendering components to the screen line by line */>
      <Grow in key={i} timeout={(i + 1) * 250}>
        <Link className={classes.links} to={`/movie/${movie.id}`}>
          <img alt={movie.title} className={classes.image} src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : 'https://www.fillmurray.com/>200/300'} />
          <Typography className={classes.title} variant="h5">{movie.title}</Typography>
          <Tooltip disableTouchListener title={`${movie.vote_average} / 10`}>
            <div>
              <Rating readOnly value={movie.vote_average / 2} precision={0.1} />
            </div>
          </Tooltip>
        </Link>
      </Grow>
    </Grid>
  );
};

export default Movie;
