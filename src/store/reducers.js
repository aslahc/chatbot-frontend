// redux/reducers.js

// Initial state for responses
const initialResponseState = {
  responses: [],
};

// Response reducer
export const responseReducer = (state = initialResponseState, action) => {
  switch (action.type) {
    case "SAVE_RESPONSE":
      return { ...state, responses: [...state.responses, action.payload] };
    case "SAVE_ALL_RESPONSES":
      return { ...state, responses: action.payload }; // Replace responses with fetched ones
    default:
      return state;
  }
};

// Initial state for authentication
const initialAuthState = {
  user: null,
  token: null,
};

// Authentication reducer
export const authReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };
    case "LOGOUT":
      return { ...state, user: null, token: null };
    default:
      return state;
  }
};
