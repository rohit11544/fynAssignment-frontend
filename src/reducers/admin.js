const reducers = (adminName = "", action) => {
    switch (action.type) {
        case "FETCH_ADMIN_NAME":
            return action.payload.message;
        case "LOGOUT_ADMIN_NAME":
            return action.payload;
        default:
            return adminName;
    }
};
export default reducers;