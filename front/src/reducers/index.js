import {
    SEARCH_MOVIES_REQUEST,
    SEARCH_MOVIES_SUCCESS,
    SEARCH_MOVIES_FAILURE
} from "../actions";

const movies = (state = [], action) => {
    switch(action.type) {
        case SEARCH_MOVIES_REQUEST:
            return state;
        case SEARCH_MOVIES_SUCCESS:
            return state;
        case SEARCH_MOVIES_FAILURE:
            return state;
    }
};
export default movies;