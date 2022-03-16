var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.send('Hello World');
});
app.get('/dodaj/:num1/:num2', function (req, res) {
    var a = Number(req.params.num1);
    var b = Number(req.params.num2);
    var result = a + b;
    res.send("Wynik dodawania to: ".concat(result, "."));
});
app.get('/odejmij/:num1/:num2', function (req, res) {
    var a = Number(req.params.num1);
    var b = Number(req.params.num2);
    var result = a - b;
    res.send("Wynik odejmowania to: ".concat(result, "."));
});
app.get('/podziel/:num1/:num2', function (req, res) {
    var a = Number(req.params.num1);
    var b = Number(req.params.num2);
    var result = a / b;
    res.send("Wynik dzielenia to: ".concat(result, "."));
});
app.get('/pomnoz/:num1/:num2', function (req, res) {
    var a = Number(req.params.num1);
    var b = Number(req.params.num2);
    var result = a * b;
    res.send("Wynik mnozenia to: ".concat(result, "."));
});
app.listen(3000);
