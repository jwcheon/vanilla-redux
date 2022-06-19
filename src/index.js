import { createStore } from "redux";


const plus = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const ADD = "ADD";
const MINUS = "MINUS";

const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1
    case MINUS:
      return count - 1
    default :
      return count
  }

  // if (action.type === "ADD") {
  //   return count + 1;
  // } else if (action.type === "MINUS") {
  //   return count - 1;
  // } else {
  //   return count;
  // }
};

const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
}

countStore.subscribe(onChange);

plus.addEventListener("click", () => countStore.dispatch({ type: ADD }));
minus.addEventListener("click", () => countStore.dispatch({ type: MINUS }));



// <<< The old way >>>

// let count = 0;
// number.innetText = count;

// const updateText = () => {
//   number.innerText = count;
// }

// const handleAdd = () => {
//   count = count + 1;
//   updateText();
// }

// const handleMinus = () => {
//   count = count - 1;
//   updateText();
// // }
