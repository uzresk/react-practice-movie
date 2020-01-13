import React, {useReducer, useState} from "react";
import {
    FETCH_INIT,
    FETCH_SUCCESS,
    FETCH_FAILURE,
} from "../actions";
import axios from "axios";

const Search = ({state, dispatch}) => {

    const [searchValue, setSearchValue] = useState('');

    const callSearchFunction = e => {
        e.preventDefault();
        dispatch({
            type: FETCH_INIT
        });
        const fetchData = async () => {
            try {
                const result = await axios(`https://www.omdbapi.com/?s=${searchValue}&apikey=`);
                dispatch({
                    type: FETCH_SUCCESS,
                    payload: result.data.Search,
                })
            } catch (error) {
                dispatch({
                    type: FETCH_FAILURE
                })
            }
        };
        fetchData();
    };

    return (
        <form className="search">
            <input
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
                type="text"
            />
            <input onClick={callSearchFunction} type="submit" value="SEARCH"/>
        </form>
    );
};
export default Search;