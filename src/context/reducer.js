export const actionType = {
  SET_USER: "SET_USER",
  SET_BOOKS: "SET_BOOKS",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionType.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    case actionType.SET_BOOKS:
      return {
        ...state,
        books: action.books,
      };

    default:
      return state;
  }
};

export default reducer;
