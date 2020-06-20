const express = require("express");
const app = express();

const { GoogleSpreadsheet } = require("google-spreadsheet");
const creds = require("./creds.json");

app.get("/dummy", async (req, res, next) => {
  try {
    const doc = new GoogleSpreadsheet(
      "1sLhkiRM3UkTMzOcrObhS27RxSkcDHG4FolZLfW14yx4"
    );
    await doc.useServiceAccountAuth(creds);
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];
    const row = {
      Name: "Sachin",
      Number: "9876543210",
    };
    await sheet.addRow(row);
    res.status(200).json({ msg: "Added", success: true });
  } catch (error) {
    console.log(error);
  }
});

module.exports = app;
