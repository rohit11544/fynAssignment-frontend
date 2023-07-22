import axios from "axios";

const baseUrl = "https://fyn-assignment-backend.vercel.app/";
//--------------------------------------Pric Calc---------------------------------------------------------
const urlPrice = baseUrl + "price";

export const calcPrice = (distance, time) =>
  axios.get(`${urlPrice}/${distance}/${time}`);

//--------------------------------------Admin----------------------------------------------------------
const urlAdmin = baseUrl + "admin";

export const verifyAdmin = (email, password) =>
  axios.get(`${urlAdmin}/${email}/${password}`);

//--------------------------------------configEnable----------------------------------------------------
const urlPriceConfigEnable = baseUrl + "configEnable";

export const fetchPriceConfigEnable = () => axios.get(urlPriceConfigEnable);

export const enableConfig = (id, formData) =>
  axios.get(`${urlPriceConfigEnable}/${id}`, formData);

//--------------------------------------priceConfig----------------------------------------------------
const urlPriceConfig = baseUrl + "priceConfig";

export const fetchPriceConfig = () => axios.get(urlPriceConfig);

export const createPriceConfig = (newPriceConfig) =>
  axios.post(urlPriceConfig, newPriceConfig);

export const updatePriceConfig = (id, updatePriceConfig) =>
  axios.patch(`${urlPriceConfig}/${id}`, updatePriceConfig);

export const deletePriceConfig = (id) =>
  axios.delete(`${urlPriceConfig}/${id}`);
