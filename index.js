var express = require ("express");
var app = express();

const PORT = 3000;

// Analyze logic
var xml2js = require('xml2js');
var parser = new xml2js.Parser();
var pollData = require ("./analyze.js");

// Other dependencies
var module = require('./SortingAlgorithms/quickSort.js');
//var sort = require('./SortingAlgorithms/quickSort');
var nodemailer = require('nodemailer');
var sendEmail = require('./EmailServer/email.js');


//var data = {};

//analayze.pollData(data);

/*app.get("/", function () {
    res.sendfile("index.html");
});

app.post("/request", function (req, res) {
    if (req.body.email && req.body.link)
        res.send("Unsuccesful");
    else {
        data.push(req.body);
        data = sort.quicksort(data);
        updateData();
        res.send("Succesful");
    }
};
*/

pollData.getPrices();

//pollData.getPrice();
//console.log(data);

console.log("Listening on PORT: " + PORT);
app.listen(PORT);
