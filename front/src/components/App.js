import React, {useState, useEffect, useContext, useReducer} from "react";
import "../App.css";
import reducer from '../reducers'
import Header from "./Header";
import Movie from "./Movie";
import Search from "./Search";
import AppContext from "../contexts/AppContext";
import {SEARCH_MOVIES_REQUEST} from "../actions";

const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey="; // you should replace this with yours
const App = () => {

        const initialState = {
            loading: true,
            movies: [],
            errorMessage: null
        };
        const [state, setState] = useState(initialState);
        const {loading, movies, errorMessage} = state;

        useEffect(() => {
            console.log("init")
            // dispatch({
            //     type: SEARCH_MOVIES_REQUEST
            // });
            fetch(MOVIE_API_URL)
                .then(response => response.json())
                .then(jsonResponse => {
                    setState({
                        ...state,
                        movies: jsonResponse.Search,
                        loading: false
                    })
                })
        }, []);

        const search = searchValue => {
            setState({
                ...state,
                loading: true,
                errorMessage: null,
            });

            fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=`)
                .then(response => response.json())
                .then(jsonResponse => {
                    if (jsonResponse.Response === "True") {
                        setState({
                            ...state,
                            movies: jsonResponse.Search,
                            loading: false,
                        });
                    } else {
                        setState({
                            ...state,
                            loading: false,
                            errorMessage: jsonResponse.Error
                        });
                    }
                });
        };


        return (
            <div className="App">
                <Header text="HOOKED"/>
                <Search search={search}/>
                <p className="App-intro">Sharing a few of our favourite movies</p>
                <div className="movies">
                    {loading && !errorMessage ? (
                        <span>loading...</span>
                    ) : errorMessage ? (
                        <div className="errorMessage">{errorMessage}</div>
                    ) : (
                        movies.map((movie, index) => (<Movie key={index} movie={movie}/>))
                    )}
                </div>
            </div>
        );
    }
;

export default App;