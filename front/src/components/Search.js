import React, {useState} from "react";
import {FETCH_FAILURE, FETCH_INIT, FETCH_SUCCESS,} from "../actions";
import {fetchMovieData} from "../api";

const Search = ({state, dispatch}) => {

    const [searchValue, setSearchValue] = useState('');

    const callSearchFunction = e => {
        e.preventDefault();
        dispatch({
            type: FETCH_INIT
        });
        const fetchData = async () => {
            try {
                const result = await fetchMovieData(searchValue);
                dispatch({
                    type: FETCH_SUCCESS,
                    payload: result,
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