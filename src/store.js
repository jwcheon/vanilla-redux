import { createStore } from "redux";
import { createAction } from "@reduxjs/toolkit";

// Actions
const addToDo = createAction("ADD")
const deleteToDo = createAction("DELETE")


// Reducer
const reducer = (state = [], action) => {
    console.log(action)
    switch(action.type) {
        case addToDo.type:
            return [{ text: action.payload, id: Date.now() }, ...state];
        case deleteToDo.type:
            return state.filter(toDo => toDo.id !== action.payload);
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