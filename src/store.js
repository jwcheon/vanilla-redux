import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

// Actions
const addToDo = (text) => {
    return {
        type: ADD,
        text
    };
}

const deleteToDo = (id) => {
    return {
        type: DELETE,
        id: parseInt(id)
    };
}

// Reducer
const reducer = (state = [], action) => {
    switch(action.type) {
        case ADD:
            return [{ text: action.text, id: Date.now() }, ...state];
        case DELETE:
            return state.filter(toDo => toDo.id !== action.id);
        default:
            return state;
    }
}

// Store
const store = createStore(reducer);

export const actionCreators = {
    addToDo,
    deleteToDo
}

export default store;