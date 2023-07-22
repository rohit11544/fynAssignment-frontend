const reducers = (priceConfigEnableDetails = [], action) => {
    switch (action.type) {
        case "UPDATE_PRICE_CONFIG_ENABLE":
            return priceConfigEnableDetails.map((priceConfigEanble) =>
                priceConfigEanble._id === action.payload._id ? action.payload : priceConfigEanble
            );
        case "FETCH_ALL_PRICE_CONFIG_ENABLE":
            return action.payload;
        default:
            return priceConfigEnableDetails;
    }
};
export default reducers;