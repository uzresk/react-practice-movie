import {FETCH_FAILURE, FETCH_INIT, FETCH_SUCCESS} from "../actions";

const movie = (state, action) => {
    switch (action.type) {
        case FETCH_INIT:
            return {
                ...state,
                loading: true,
                movies: [],
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
                movies: [],
                errorMessage: "fetch error.",
            };
        default:
            return state;
    }
};

export default movie