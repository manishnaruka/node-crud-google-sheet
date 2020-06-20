const { GoogleSpreadsheet } = require("google-spreadsheet");
const { promisify } = require("util");
const creds = require("./creds.json");

async function accessSheet() {
  try {
    const doc = new GoogleSpreadsheet(
      "1sLhkiRM3UkTMzOcrObhS27RxSkcDHG4FolZLfW14yx4"
    );

    await doc.useServiceAccountAuth(creds);
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];
    //const sheet = info.worksheets[0];
    //console.log(`sheet title : ${sheet.title} rows : ${sheet.rowCount}`);
    const row = await sheet.getRows({
        offset : 0
    })
    console.log(row[0].Name);

    const r = {
        Name : "Vikas",
        Number : "9876543210"
    }

    await sheet.addRow(r);
    
  } catch (error) {
    console.log(error);
  }
}

accessSheet();
