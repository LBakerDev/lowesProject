const express = require('express');
const bodyParser = require('body-parser');

const app = express();



app.set("view engine", "ejs");
app.use(express.static('public'));

// Line which is reused for body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

const url = "https://m.lowes.com/CatalogServices/product/nvalue/v1_0?nValue=4294857975&maxResults=20&showURL=1&rollUpVariants=1&showUrl=true&storeNumber=0595&priceFlag=rangeBalance&showMarketingBullets=1"

app.get("/", function (req, res) {
    //res.render('index');
    var request = require('request');
    request(url, function (error, response, body) {
        res.render('index', {body: JSON.parse(body)});
    });
})





app.listen(8080 || process.env.Port, function () {
    console.log("Server is running");
});

