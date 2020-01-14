import Movie from "./Movie";
import React, {useContext} from "react";
import AppContext from "../contexts/AppContext";

const Movies = () => {

    const {state, dispatch} = useContext(AppContext);

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