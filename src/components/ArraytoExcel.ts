export const arrayToExcel = (function () {

    //STEP 2: Append Table data to Spreadsheet XML Template.
    const createXMLTable = (table: any, fileName: any) => {
        const xmlTable = `
        <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
        <head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>${fileName}</x:Name>
        <x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]-->
        </head>
        <body>
        ${table}
        </body>
        </html>`
        return xmlTable;
    }

    //STEP 3: Create fileURL from XML template for download
    const createFileUrl = (xmlTable: any) => {
        const tableBlob = new Blob([xmlTable], { type: 'application/vnd.ms-excel;base64,' });
        console.log('BLOB', tableBlob)
        const downloadURL = URL.createObjectURL(tableBlob);
        return downloadURL;
    }

    //STEP 5: Create download link on button click
    const downloadFile = (downloadURL: any, fileName: any) => {
        const downloadLink = document.createElement('a');
        document.body.appendChild(downloadLink);
        downloadLink.download = fileName;
        downloadLink.href = downloadURL;
        downloadLink.click();
    }

    //STEP 1: Convert Array to HTML Table.
    return{
        convertArrayToTable : async (apiArray:any, fileName: any) => {
            //use keys from the first array object to form table column headers
            const headersExplanation = `<tr>
            <td>${apiArray.header.k1}</td>
            <td>${apiArray.header.k2}</td>
            <td>${apiArray.header.k3}</td>
            <td>${apiArray.header.k4}</td>
            <td>${apiArray.header.k5}</td>
            <td>${apiArray.header.k6}</td>
            <td>${apiArray.header.k7}</td>
            <td>${apiArray.header.k8}</td>
            <td>${apiArray.header.k9}</td>
            <td>${apiArray.header.k10}</td>
            <td>${apiArray.header.k11}</td>
            <td>${apiArray.header.k12}</td>
            <td>${apiArray.header.k13}</td>
            <td>${apiArray.header.k14}</td>
            <td>${apiArray.header.k15}</td>
            <td>${apiArray.header.k16}</td>
            <td>${apiArray.header.k17}</td>
            <td>${apiArray.header.k18}</td>
            <td>${apiArray.header.k19}</td>
            <td>${apiArray.header.k20}</td>
            <td>${apiArray.header.k21}</td>
            <td>${apiArray.header.k22}</td>
            <td>${apiArray.header.k23}</td>
            <td>${apiArray.header.k24}</td>
            <td>${apiArray.header.k25}</td>
            <td>${apiArray.header.dateTime}</td>
            </tr>`
            const tableHeaders = `<tr>${Object.keys(apiArray.data[0]).map(key => `<td>${key}</td>`).join('')}</tr>`
            console.log('tableHeaders', tableHeaders)
            //now loop through all array objects to form table rows
            const tableRows = apiArray.data.map((obj: any) =>
                [`<tr>${Object.keys(obj).map(key => `<td>${obj[key] === null || obj[key] === '' ? '' : obj[key]}</td>`).join('')}<tr/>`]).join('');
            console.log('tableRows', tableRows)
            const table = `<table>${headersExplanation}${tableHeaders}${tableRows}</table>`.trim();
            console.log('table', table)
            const xmlTable = createXMLTable(table, fileName);
            console.log('xmlTable', xmlTable)
            const downloadURL = createFileUrl(xmlTable);
            downloadFile(downloadURL, fileName);

        }
    }

})();