import axios from "axios";
class Characters {
  getCharacters = async () => {
    const result = {
      value: null,
      error: null,
    };
    try {
      const response = await axios.get(
        "https://www.breakingbadapi.com/api/characters"
      );
      result.value = response.data;
    } catch (e) {
      result.error = e.message;
    }
    return result;
  };
  getCharacterById = async (id) => {
    const result = {
      value: null,
      error: null,
    };
    try {
      const response = await axios.get(
        `https://www.breakingbadapi.com/api/characters/${id}`
      );
      result.value = response.data;
    } catch (e) {
      result.error = e.message;
    }
    return result;
  };
}

export default new Characters();
