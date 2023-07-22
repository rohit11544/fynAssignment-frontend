import * as api from "../api";

export const getPriceConfigEnable = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPriceConfigEnable();

    dispatch({ type: "FETCH_ALL_PRICE_CONFIG_ENABLE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePriceConfigEnable = (id) => async (dispatch) => {
  try {
    const { data } = await api.enableConfig(id);
    dispatch({ type: "UPDATE_PRICE_CONFIG_ENABLE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
