export const initialState = {
  user: null,
  userName: "",
  id: "",
  cat: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_NAME":
      return {
        ...state,
        userName: action.userName,
      };
    case "SET_ID":
      return {
        ...state,
        id: action.id,
      };
    case "SET_URI":
      return {
        ...state,
        cat: action.cat,
      };

    // case "SIGN_OUT":
    //   return {
    //     ...state,
    //     user:
    //   }
    default:
      return state;
  }
};

export default reducer;
