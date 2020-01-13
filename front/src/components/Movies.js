import Movie from "./Movie";
import React from "react";

const Movies = ({state, dispatch}) => {

    return (
        <div className="movies">
            {state.loading && !state.errorMessage ? (
                <span>loading...</span>
            ) : state.errorMessage ? (
                <div className="errorMessage">{state.errorMessage}</div>
            ) : (
                state.movies.map((movie, index) => (<Movie key={index} movie={movie}/>))
            )}
        </div>
    );
};
export default Movies;