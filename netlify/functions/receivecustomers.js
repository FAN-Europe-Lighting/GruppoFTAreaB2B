const fetch = require("node-fetch");

exports.handler = async () => {
  try {
    const url = process.env.GOOGLE_SHEET_CUSTOMERS_URL + '?action=getClienti';
    const response = await fetch(url);
    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
