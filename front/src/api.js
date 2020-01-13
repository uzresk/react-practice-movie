import axios from "axios";

const apiKey='';

export const fetchMovieData = async (searchValue) => {
    const result = await axios(`https://www.omdbapi.com/?s=${searchValue}&apikey=${apiKey}`);
    if (result.data.Response==='True') {
        return result.data.Search;
    } else {
        throw new Error('Error Response.');
    }
};
