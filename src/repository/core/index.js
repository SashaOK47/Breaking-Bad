class Core {
  createPersons = async (person) => {
    const result = {
      value: null,
      error: null,
    };
    try {
      const response = await axios.post("/persons", person);
      result.value = response.data;
    } catch (e) {
      result.error = e.response.data;
    }
    return result;
  };
}

export default new Core();
