export const ExportToCSV = (function () {

  const downloadFile = (data: any, filename: any, fields: any) => {
    let csvData = ConvertToCSV(data, fields);
    console.log('csvData', csvData);
    let blob = new Blob(["\ufeff" + csvData], {
      type: "text/csv;charset=utf-8;"
    });
    let dwldLink = document.createElement("a");
    let url = URL.createObjectURL(blob);
    let isSafariBrowser =
      navigator.userAgent.indexOf("Safari") !== -1 &&
      navigator.userAgent.indexOf("Chrome") === -1;
    if (isSafariBrowser) {
      //if Safari open in new window to save file with random filename.
      dwldLink.setAttribute("target", "_blank");
    }
    dwldLink.setAttribute("href", url);
    dwldLink.setAttribute("download", filename + ".csv");
    dwldLink.style.visibility = "hidden";
    document.body.appendChild(dwldLink);
    dwldLink.click();
    document.body.removeChild(dwldLink);
  }

  const getHeading = (val: string) => {
    var text = val;
    var result = text.replace(/([A-Z])/g, " $1");
    var finalResult = result.charAt(0).toUpperCase() + result.slice(1);
    return finalResult;
  }

  const ConvertToCSV = (objArray: any, headerList: any) =>{
    let array = typeof objArray != "object" ? JSON.parse(objArray) : objArray;
    let str = "";
      let row = "S.No,";
      

    for (let index in headerList) {
      row += getHeading(headerList[index]) + ",";
    }
    row = row.slice(0, -1);
    str += row + "\r\n";
    // headerList = ["deviceName", "modelName", "softwareVersion", "eosSoftware", "eodSoftware"]
    for (let i = 0; i < array.length; i++) {
      let line = i + 1 + "";
      for (let index in headerList) {
        let head = headerList[index];
        console.log('head', head);
        line += "," + array[i][head];
      }
        str += line + "\r\n";
        console.log('str', str);
    }
    return str;
    }
    
    return downloadFile
}

)();