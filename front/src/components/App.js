import React, {useEffect, useReducer} from "react";
import "../App.css";
import reducer from '../reducers'
import Header from "./Header";
import Movies from "./Movies";
import Search from "./Search";
import {FETCH_FAILURE, FETCH_INIT, FETCH_SUCCESS} from "../actions";
import {fetchMovieData} from "../api";
import AppContext from "../contexts/AppContext";

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
                const result = await fetchMovieData("man");
                dispatch({
                    type: FETCH_SUCCESS,
                    payload: result,
                });
            } catch (error) {
                dispatch({type: FETCH_FAILURE});
            }
        };
        fetchData();
    }, []);

    return (
        <AppContext.Provider value={{state, dispatch}}>
            <div className="App">
                <Header text="HOOKED"/>
                <Search/>
                <p className="App-intro">Sharing a few of our favourite movies</p>
                <Movies/>
            </div>
        </AppContext.Provider>
    );
};

export default App;