import React, {useEffect, useReducer, useState} from "react";
import axios from 'axios';
import "../App.css";
import reducer from '../reducers'
import Header from "./Header";
import Movie from "./Movie";
import Search from "./Search";
import {FETCH_FAILURE, FETCH_INIT, FETCH_SUCCESS} from "../actions";

const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=";

const App = () => {

    const initialState = {
        loading: true,
        movies: [],
        errorMessage: null
    };
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const fetchData = async () => {
            dispatch({type: FETCH_INIT});
            try {
                const result = await axios(MOVIE_API_URL);
                dispatch({
                    type: FETCH_SUCCESS,
                    payload: result.data.Search,
                });
            } catch (error) {
                dispatch({type: FETCH_FAILURE});
            }
        };
        fetchData();
    }, []);

    return (
        <div className="App">
            <Header text="HOOKED"/>
            <Search state={state} dispatch={dispatch}/>
            <p className="App-intro">Sharing a few of our favourite movies</p>
            <div className="movies">
                {state.loading && !state.errorMessage ? (
                    <span>loading...</span>
                ) : state.errorMessage ? (
                    <div className="errorMessage">{state.errorMessage}</div>
                ) : (
                    state.movies.map((movie, index) => (<Movie key={index} movie={movie}/>))
                )}
            </div>
        </div>
    );
};

export default App;