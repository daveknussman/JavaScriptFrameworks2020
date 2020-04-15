import * as types from "./constants/actionTypes";

const reducer = (
  /**
   * Starting state.
   * You may want to add more values here
   */
  state = {
    count: 0,
    isVisible: false,
    color:' ',
    todos: ["Finish this assignment", "Read a book"]
  },
  action
) => {
  console.log("action", action);
  switch (action.type) {
    case types.INCREASE_COUNT:
      return {
        ...state,
        count: state.count + 1
      };
    /**
     * Add additional case statements here
     */
    case types.DECREASE_COUNT:
      return {
        ...state,
        count: state.count -1 
      };
      case types.TOGGLE_TEXT:
        return {
          ...state,
          isVisible: !state.isVisible
        };
      case types.SET_RED:
        return {
          ...state,
          color: "red"
        };
        case types.SET_YELLOW:
          return {
            ...state,
            color: "yellow"
          };
          case types.SET_GREEN:
            return {
              ...state,
              color: "green"
            };
          case types.ADD_TODO:
            console.log(state);
            return {
              ...state,
              todos: [...state.todos, this.props.todoInput]
            };                    
    default:
      return state;
  }
};

export default reducer;
