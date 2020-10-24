const CSVToJSON = require("csvtojson");
const JSONToCSV = require("json2csv").parse;
const FileSystem = require("fs");
const path = require("path");

let fileURL = path.join(path.dirname(process.mainModule.filename), "data", "GSPC.csv");

exports.getGspcCSVToJSONData = (req, res, next) => {
   // FileSystem.readFile(fileURL, "utf8", (err, data) => {
   //    if (!err) {
   //       console.log("File access successful");
   //    } else {
   //       console.log(err);
   //    }
   // });

   CSVToJSON().fromFile(fileURL)
      .then(source => {
         //console.log(source);
         return res.json(source);
      })
      .catch(err => {
         console.log("Error: ", err);
         return res.json({
            message: err,
            error: true,
         });
      });
};

exports.postGspcJsonDataToCSV = (req, res, next) => {
   //Date,Open,High,Low,Close,Adj Close,Volume
   let rs = {
      Date: req.body.date,
      Open: req.body.open,
      High: req.body.high,
      Low: req.body.low,
      Close: req.body.close,
      AdjClose: req.body.adjclose,
      Volume: req.body.volume
   };
   CSVToJSON().fromFile(fileURL)
      .then(source => {
         source.push(rs);
         const csv = JSONToCSV(source, { fields: ["Date", "Open", "High", "Low", "Close", "AdjClose", "Volume"] });
         FileSystem.writeFile("../data/GSPC2.csv", csv);
         return res.json(rs);
      })
      .catch(err => {
         console.log("Error: ", err);
         return res.json({
            message: err,
            error: true,
         });
      });
};

