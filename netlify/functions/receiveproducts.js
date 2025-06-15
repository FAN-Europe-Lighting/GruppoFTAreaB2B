const fetch = require("node-fetch");

exports.handler = async (event) => {
  try {
    const googleSheetUrl = process.env.GOOGLE_SHEET_PRODUCTS_URL;
    const response = await fetch(`${googleSheetUrl}?action=getArticoli`, {
      method: "GET"
    });
    if (!response.ok) {
      throw new Error(`Errore API Google Sheet: ${response.statusText}`);
    }
    const clienti = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(clienti),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
