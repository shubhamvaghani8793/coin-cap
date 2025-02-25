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
        const response = await api.get('/a89b68d4d19dcc0a50c3fd58/codes')
        return response.data;
    } catch (error) {
        throw error
    }
}  

export const getCurrencyRateData = async (flag) => {
    try {
        const response = await api.get(`a89b68d4d19dcc0a50c3fd58/pair/USD/${flag}/1`)
        return response.data
    } catch (error) {
        throw error
    }
}

const url = 'https://thingproxy.freeboard.io/fetch/https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=1000&cryptocurrency_type=all&tag=all'
const apiKey = cmcApiKey;

export const getAllCryptoList = async () => {
    try {
        const response = await axios.get(url, {
            headers: {
                'X-CMC_PRO_API_KEY': apiKey
            }
        })

        return response;
    } catch (error) {
        throw error
    }
}