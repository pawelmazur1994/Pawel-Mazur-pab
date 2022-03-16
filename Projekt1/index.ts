const express = require('express')  
const app = express()  
app.get('/', function (req, res) {  
  res.send('Hello World')  
});

app.get('/dodaj/:num1/:num2', function (req, res) {
  const a = Number(req.params.num1);
  const b = Number(req.params.num2);
  let result = a + b;
  res.send(`Wynik dodawania to: ${result}.`);
})

app.get('/odejmij/:num1/:num2', function (req, res) {
  const a = Number(req.params.num1);
  const b = Number(req.params.num2);
  let result = a - b;
  res.send(`Wynik odejmowania to: ${result}.`);
})

app.get('/podziel/:num1/:num2', function (req, res) {
  const a = Number(req.params.num1);
  const b = Number(req.params.num2);
  let result = a / b;
  res.send(`Wynik dzielenia to: ${result}.`);
})

app.get('/pomnoz/:num1/:num2', function (req, res) {
  const a = Number(req.params.num1);
  const b = Number(req.params.num2);
  let result = a * b;
  res.send(`Wynik mnozenia to: ${result}.`);
})

app.listen(3000);
