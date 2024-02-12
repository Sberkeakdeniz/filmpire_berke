/* eslint-disable import/no-cycle */
import React, { useEffect } from 'react';
import { Typography, Button, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { ExitToApp } from '@mui/icons-material';

import { useGetListQuery } from '../../services/TMDB';
import { userSelector } from '../../features/auth';
import { RatedCards } from '..';

const Profile = () => {
  const { user } = useSelector(userSelector);

  const { data: favoriteMovies, refetch: refetchFavorites } = useGetListQuery({ listName: 'favorite/movies', accountId: user.id, sessionId: localStorage.getItem('session_id'), page: 1 });
  const { data: watchListMovies, refetch: refetchWatchlisted } = useGetListQuery({ listName: 'watchlist/movies', accountId: user.id, sessionId: localStorage.getItem('session_id'), page: 1 });

  // this refetch the data without reloading the page (for displaying the current favorite movies at the profile page)
  useEffect(() => {
    refetchFavorites();
    refetchWatchlisted();
  }, []);

  const logout = () => {
    localStorage.clear();

    window.location.href = '/';
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4" gutterBottom>My Profile</Typography>
        <Button color="inherit" onClick={logout}>
          Logout &nbsp; <ExitToApp />
        </Button>
      </Box>
      {!favoriteMovies?.results?.length && !watchListMovies?.results?.length
        ? <Typography variant="h5">You have no favourite movies, please add one or more...</Typography>
        : (
          <Box>
            <RatedCards title="Favorite Movies" data={favoriteMovies} />
            <RatedCards title="Watchlist" data={watchListMovies} />
          </Box>
        )}
    </Box>
  );
};

export default Profile;
