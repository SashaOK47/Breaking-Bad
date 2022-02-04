import axios from "axios";
class Quotes {
  getRandomQuoteByCharacter = async (name) => {
    const result = {
      value: null,
      error: null,
    };
    try {
      const response = await axios.get(
        `https://www.breakingbadapi.com/api/quote/random?author=${name}`
      );
      result.value = response.data;
    } catch (e) {
      result.error = e.message;
    }
    return result;
  };
  getRandomQuote = async () => {
    const result = {
      value: null,
      error: null,
    };
    try {
      const response = await axios.get(
        "https://www.breakingbadapi.com/api/quote/random"
      );
      result.value = response.data;
    } catch (e) {
      result.error = e.message;
    }
    return result;
  };
}
export default new Quotes();
