const initialState = {
    user: null, // the logged-in user
    accessToken: null
  };

  export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "LOGIN_TOKEN": {
            return {
                user: action.payload.userProfile,
                accessToken: action.payload.token
            }
        }
        case "LOGOUT_SESSION": {
            return initialState
        }
      default: {
        return state;
      }
    }
  }