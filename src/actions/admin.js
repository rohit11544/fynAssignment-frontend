import * as api from "../api";

export const loginAdmin = (email, password) => async (dispatch) => {
    try {
        const response = await api.verifyAdmin(email, password);
        // console.log("message from actions ", message)
        dispatch({ type: "FETCH_ADMIN_NAME", payload: response.data });
    } catch (error) {
        console.log(error);
    }
};

export const logoutAdmin = () => async (dispatch) => {
    try {
        // const response = await api.verifyAdmin(email, password);
        // console.log("message from actions ", message)
        dispatch({ type: "LOGOUT_ADMIN_NAME", payload: "" });
    } catch (error) {
        console.log(error);
    }
};