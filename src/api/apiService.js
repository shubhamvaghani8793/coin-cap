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
        const response = await api.get('/a89b68d4d19dcc0a50c3fd58/codes')
        return response.data;
    } catch (error) {
        throw error
    }
}  