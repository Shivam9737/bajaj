// Api.js
//const BASE_URL = 'https://my-bfhl-api.herokuapp.com'; // Replace with your API URL
const BASE_URL = 'http://localhost:3001/'; // Replace with your API URL

const Api = {
  async getOperationCode() {
    const response = await fetch(`${BASE_URL}/bfhl`);
    const data = await response.json();
    return data.operation_code;
  },

  async postRequest(data) {
    const response = await fetch(`${BASE_URL}/bfhl`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data }),
    });
    return response.json();
  },
};

export default Api;
