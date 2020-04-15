import * as types from "./constants/actionTypes";

export const increaseCount = () => {
  return {
    type: types.INCREASE_COUNT
  };
};

export const decreaseCount = () => {
  return {
    type: types.DECREASE_COUNT
  };
};

export const toggle = () => {
  return {
    type: types.TOGGLE_TEXT
  };
};

export const pickColor = color => {
  if (color === "red") {
    return {
      type: types.SET_RED
    };
  }
  if (color === "yellow") {
    return {
      type: types.SET_YELLOW
    };
  }
  if (color === "green") {
    return {
      type: types.SET_GREEN
    };
  }
};

export const setInput = todoInput => {

};

export const addTodo = () => {
  return {
    type: types.ADD_TODO
  };
};
