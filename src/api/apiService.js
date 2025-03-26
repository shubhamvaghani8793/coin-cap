import axios from "axios";
import BASE_URL, { cmcApiKey } from "./config";

const api  = axios.create({
    baseURL: BASE_URL,
    headers: {
    "Content-Type": "application/json",
  },
})

// get country currency symbol
export const getCurrencyFlag = async () => {
    try {
        const response = await api.get('/ad3cf87e40fd09b87f3c5e71/codes')
        return response.data;
    } catch (error) {
        throw error
    }
}  

export const getCurrencyRateData = async (flag) => {
    try {
        const response = await api.get(`ad3cf87e40fd09b87f3c5e71/pair/USD/${flag}/1`)
        return response.data
    } catch (error) {
        throw error
    }
}

const url = 'https://coin-cap-eight.vercel.app/api/crypto'
//const apiKey = process.env.REACT_APP_CMC_API_KEY;

export const getAllCryptoList = async () => {
    try {
        const response = await axios.get(url)

        return response;
    } catch (error) {
        throw error
    }
}
