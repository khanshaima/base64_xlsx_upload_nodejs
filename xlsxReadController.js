const XLSX = require('xlsx');

export async function uploadFile(req, res) {
    try {
        const base64String = req.body.base64_string;
        // Decode the base64 string, remove extra description data
        const buffer = Buffer.from(base64String.replace("data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64", ""), 'base64');
        const workbook =await XLSX.read(buffer, { type: 'buffer' });

        const sheetNamesList = workbook.SheetNames;
        let sheetData = [];
        console.log(sheetNamesList);
        for (let i = 0; i < sheetNamesList.length; i++) {
            let data = [];
            let sheetName = sheetNamesList[i];
            const temp = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
            sheetData.push(temp);
        }
        // Send the worksheet data to the client
        res.status(200).json(sheetData);
    } catch (e) {
        res.status(500).send(`Error occurred while uploading: ${e}`);
    }

}
