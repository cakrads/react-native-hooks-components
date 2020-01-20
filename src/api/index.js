import api from '../helpers/api';
import APIPATH, {BASE_URL, API_KEY} from './path';

export const getMoviePopular = async () => {
  try {
    let params = {
      include_adult: false,
      ...API_KEY,
    };
    const API = new api();
    return await API.get(`${BASE_URL}${APIPATH.movie.popular}`, params);
  } catch (error) {
    throw error;
  }
};

export const getMovieInTheater = async () => {
  try {
    let params = {
      include_adult: false,
      ...API_KEY,
    };
    const API = new api();
    return await API.get(`${BASE_URL}${APIPATH.movie.inTheatre}`, params);
  } catch (error) {
    throw error;
  }
};

export const getGlobalList = async params => {
  try {
    let addParams = params.type === 'genre' ? {...params} : {};
    let api_path =
      params.type === 'inTheater'
        ? APIPATH.movie.inTheatre
        : params.type === 'popular'
        ? APIPATH.movie.popular
        : APIPATH.movie.main;

    params = {
      include_adult: false,
      ...params,
      ...addParams,
      ...API_KEY,
    };
    const API = new api();
    return await API.get(`${BASE_URL}${api_path}`, params);
  } catch (error) {
    throw error;
  }
};

export const getMovieDetail = async (movieID, params) => {
  try {
    params = {
      include_adult: false,
      ...params,
      ...API_KEY,
    };
    const API = new api();
    return await API.get(
      `${BASE_URL}${APIPATH.movie.detail.main}/${movieID}`,
      params,
    );
  } catch (error) {
    throw error;
  }
};

export const getMovieDetailCredit = async (movieID, params) => {
  try {
    params = {
      include_adult: false,
      ...params,
      ...API_KEY,
    };
    const API = new api();
    return await API.get(
      `${BASE_URL}${APIPATH.movie.detail.main}/${movieID}/${APIPATH.movie.detail.crewAndCast}`,
      params,
    );
  } catch (error) {
    throw error;
  }
};

export const getMovieDetailVideos = async (movieID, params) => {
  try {
    params = {
      include_adult: false,
      ...params,
      ...API_KEY,
    };
    const API = new api();
    return await API.get(
      `${BASE_URL}${APIPATH.movie.detail.main}/${movieID}/${APIPATH.movie.detail.videos}`,
      params,
    );
  } catch (error) {
    throw error;
  }
};

export const getGenreAll = async (movieID, params) => {
  try {
    params = {
      include_adult: false,
      ...params,
      ...API_KEY,
    };
    const API = new api();
    return await API.get(`${BASE_URL}${APIPATH.movie.genre}`, params);
  } catch (error) {
    throw error;
  }
};

export const getMovieSearch = async params => {
  try {
    params = {
      include_adult: false,
      ...params,
      ...API_KEY,
    };
    const API = new api();
    return await API.get(`${BASE_URL}${APIPATH.movie.search}`, params);
  } catch (error) {
    throw error;
  }
};
