// api/crypto.js
const axios = require('axios');

module.exports = async (req, res) => {
  try {
    const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=1000&cryptocurrency_type=all&tag=all', {
      headers: {
        'X-CMC_PRO_API_KEY': '168f6bde-5161-4680-849f-a949d9cc3846', // Replace with your actual CoinMarketCap API key
      }
    });
    res.status(200).json(response.data); // Send the data back to the frontend
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong with the API request.');
  }
};
