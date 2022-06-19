import { createStore } from "redux";
import { createAction, createReducer, configureStore, createSlice } from "@reduxjs/toolkit";

// Actions
// const addToDo = createAction("ADD")
// const deleteToDo = createAction("DELETE")


// Reducer
/* const reducer = (state = [], action) => {
    console.log(action)
    switch(action.type) {
        case addToDo.type:
            return [{ text: action.payload, id: Date.now() }, ...state];
        case deleteToDo.type:
            return state.filter(toDo => toDo.id !== action.payload);
        default:
            return state;
    }
} */
// const reducer = createReducer([], {
//     [addToDo]: (state, action) => {
//         // Unlike plain redux, redux-toolkit allows mutation in state! (immer)
//         // 1) since the state is mutated, **nth is returned**
//         state.push({ text: action.payload, id: Date.now() })
//     },
//     [deleteToDo]: (state, action) =>
//         // 2) on the other hand, **this is returning a new state**
//         state.filter(toDo => toDo.id !== action.payload)
// })

const toDos = createSlice({
    name: 'toDosReducer',
    initialState: [],
    reducers: {
        add: (state, action) => { state.push({ text: action.payload, id: Date.now() }) },
        remove: (state, action) => state.filter(toDo => toDo.id !== action.payload)
    }
})

// Store
// also try out Redux DevTools
// const store = createStore(reducer);
const store = configureStore({ reducer: toDos.reducer });

// console.log(toDos)

export const { add, remove } = toDos.actions;

export default store;