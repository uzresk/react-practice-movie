import axios from 'axios';
import {
    SEARCH,
    FETCH_INIT,
    FETCH_SUCCESS,
    FETCH_FAILURE
} from "../actions";

const movie = (state, action) => {
    switch (action.type) {
        case FETCH_INIT:
            return {
                ...state,
                loading: true,
                errorMessage: null,
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                movies: action.payload,
                errorMessage: null,
            };
        case FETCH_FAILURE:
            return {
                ...state,
                loading: false,
                errorMessage: "fetch error.",
            };
        default:
            return state;
    }
}

export default movie