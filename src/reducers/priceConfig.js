const reducers = (priceConfigDetails = [], action) => {
    switch (action.type) {
        case "DELETE_PRICE_CONFIG":
            return priceConfigDetails.filter((priceConfig) => priceConfig._id !== action.payload);
        case "UPDATE_PRICE_CONFIG":
            return priceConfigDetails.map((priceConfig) =>
                priceConfig._id === action.payload._id ? action.payload : priceConfig
            );
        case "FETCH_ALL_PRICE_CONFIG":
            return action.payload;
        case "CREATE_PRICE_CONFIG":
            return [...priceConfigDetails, action.payload];
        default:
            return priceConfigDetails;
    }
};
export default reducers;