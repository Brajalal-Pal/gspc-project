const CSVToJSON = require("csvtojson");
const JSONToCSV = require("json2csv").parse;
const FileSystem = require("fs");
const { endianness } = require("os");
const path = require("path");

let fileURL = path.join(path.dirname(process.mainModule.filename), "data", "GSPC.csv");

exports.getGspcCSVToJSONData = (req, res, next) => {
   let page = parseInt(req.query.page);
   let limit = parseInt(req.query.limit);
   if (!page) page = 1;
   if (!limit) limit = 10;

   const startIndex = (page - 1) * limit;
   const endIndex = page * limit;

   CSVToJSON().fromFile(fileURL)
      .then(source => {

         const results = {};
         if (endIndex < source.length) {
            results.next = {
               page: page + 1,
               limit: limit
            };
         }

         if (startIndex > 0) {
            results.previous = {
               page: page - 1,
               limit: limit
            }
         }
         results.totalPages = Math.ceil(source.length / limit);
         results.currentPage = page;
         results.results = source.slice(startIndex, endIndex);

         return res.json(results);
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

