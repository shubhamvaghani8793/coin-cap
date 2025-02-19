import axios from "axios";
import BASE_URL from "./config";

const api  = axios.create({
    baseURL: BASE_URL,
    headers: {
    "Content-Type": "application/json",
  },
})

// get country currency symbol
export const getCurrencyFlag = async () => {
    try {
        const response = await api.get('/2130ddb38e6fc933d9d75976/codes')
        return response.data;
    } catch (error) {
        throw error
    }
}  

export const getCurrencyRateData = async (flag) => {
    try {
        const response = await api.get(`2130ddb38e6fc933d9d75976/pair/USD/${flag}/1`)
        return response.data
    } catch (error) {
        throw error
    }
}

const url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=1000&cryptocurrency_type=all&tag=all'
const apiKey = '168f6bde-5161-4680-849f-a949d9cc3846';

export const getAllCryptoList = async () => {
    try {
        const response = await axios.get(url, {
            headers: {
                'X-CMC_PRO_API_KEY': '168f6bde-5161-4680-849f-a949d9cc3846'
            }
        })

        return response.data
    } catch (error) {
        throw error
    }
}