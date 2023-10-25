import axios from 'axios';

const apiKey = import.meta.env.VITE_TMDB_API_KEY;
const url_base = import.meta.env.VITE_TMDB_URL_BASE;
const discover_path = import.meta.env.VITE_TMDB_DISCOVER_MOVIE_PATH;

export const getPeliculas = async () => {
    const options = { 
        params: { 
            api_key: apiKey,
            include_adult: false,
            include_video: false,
            language: 'es-MX',
            sort_by: 'popularity.desc'
        } 
    }
    return axios.get(url_base + discover_path, options);
}

