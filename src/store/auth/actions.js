import axios from "axios";

export function loginToken(token, userProfile) {
    return {
        type: "LOGIN_TOKEN",
        payload: { token, userProfile }
      };
}



export function login(email, password) {
    return async function thunk (dispatch, getState) {
        try {
            const response = await axios.post("http://localhost:4000/auth/login", {
                email: email,
                password: password,
              })
              
              console.log("Post Response", response.data);
              const token = response.data.jwt
      
              const meResponse = await axios.get("http://localhost:4000/auth/me", { 
                  headers: { Authorization: `Bearer ${token}` } 
              })
      
              console.log("Me response", meResponse)
              const userProfile = meResponse.data
      
      
            dispatch(loginToken(token, userProfile))
            localStorage.setItem("jwt", token)
        } catch(e) {
            console.log(e)
        }
    }
}

