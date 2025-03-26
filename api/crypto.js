const axios = require("axios");

module.exports = async (req, res) => {
  // Allow requests only from your GoDaddy domain
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://coincapconvert.com"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle CORS preflight request
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    const response = await axios.get(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=1000&cryptocurrency_type=all&tag=all",
      {
        headers: {
          "X-CMC_PRO_API_KEY": '168f6bde-5161-4680-849f-a949d9cc3846',
        },
      }
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error("API Error:", error);
    res
      .status(500)
      .json({ message: "Something went wrong with the API request." });
  }
};
