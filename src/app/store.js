import {configureStore} from '@reduxjs/toolkit';
import { tmdbApi } from '../services/TMDB';

// a file that exports a function that creates a store
export default configureStore({
    reducer: {
        [tmdbApi.reducerPath]: tmdbApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(tmdbApi.middleware),
});