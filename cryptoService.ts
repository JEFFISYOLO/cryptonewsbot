import axios from 'axios';

const API_KEY = '42cbc0ee-a70c-43c0-a46d-ed0ecb7f95e0'; // Replace with your actual API key

export const fetchCryptoData = async (symbol: string = 'BTC') => {
  try {
    const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest', {
      headers: {
        'X-CMC_PRO_API_KEY': API_KEY,
      },
      params: {
        symbol,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data from CoinMarketCap:', error);
    throw error;
  }
};
