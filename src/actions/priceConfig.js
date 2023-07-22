import * as api from "../api";

export const getPriceConfig = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPriceConfig();

        dispatch({ type: "FETCH_ALL_PRICE_CONFIG", payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const createPriceConfig = (priceConfig) => async (dispatch) => {
    try {
        const { data } = await api.createPriceConfig(priceConfig);
        dispatch({ type: "CREATE_PRICE_CONFIG", payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const updatePriceConfig = (id, priceConfig) => async (dispatch) => {
    try {
        const { data } = await api.updatePriceConfig(id, priceConfig);
        dispatch({ type: "UPDATE_PRICE_CONFIG", payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const deletePriceConfig = (id) => async (dispatch) => {
    try {
        await api.deletePriceConfig(id);
        dispatch({ type: "DELETE_PRICE_CONFIG", payload: id });
    } catch (error) {
        console.log(error);
    }
};