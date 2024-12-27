import { createStore } from "redux";


// Initial state
const initialState = {
    files: []
};

// Reducer function
const fileReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_FILES':
            return {
                ...state,
                files: [...state.files, ...action.payload]
            }
        default:
            return state;
    }
};

// Create store
const store = createStore(fileReducer);

export default store;