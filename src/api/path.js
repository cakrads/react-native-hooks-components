import {nextWeek, lastWeek} from './../helpers/date';

export const BASE_URL = 'https://api.themoviedb.org/3/';
export const API_KEY = {
  api_key: '44632f6b1fa0403b61890096a66f7408',
};

export default {
  movie: {
    main: 'discover/movie',
    detail: {
      main: 'movie',
      crewAndCast: 'credits',
      videos: 'videos',
    },
    genre: 'genre/movie/list',
    search: 'search/movie',
    inTheatre: 'movie/now_playing',
    popular: 'movie/popular',
    upcoming: 'movie/upcoming',
    // inTheatre: {
    //   'primary_release_date.gte': lastWeek(),
    //   'primary_release_date.lte': nextWeek(),
    // },
    // popular: {
    //   sort_by: 'popularity.desc',
    // },
  },
};
