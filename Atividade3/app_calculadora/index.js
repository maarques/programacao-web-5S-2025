const express = require('express');
const calc = require('./calculadora');
const app = express();

app.get('/ola', (req, res) => {
    res.send('Hello, World!');
});

app.get('/ola/:nome', (req, res) => {
    res.send('Olá, ' + req.params.nome);
});

app.get('/somar/:a/:b', (req, res) => {
    const { a, b } = req.params;
    const soma = calc.somar(Number(a), Number(b));
    res.send(`Resultado da soma é = ${soma}`);
});

app.get('/subtrair/:a/:b', (req, res) => {
    const { a, b } = req.params;
    const subtracao = calc.subtrair(Number(a), Number(b));
    res.send(`Resultado da subtração é = ${subtracao}`);
});

app.get('/multiplicar/:a/:b', (req, res) => {
    const { a, b } = req.params;
    const multiplicacao = calc.multiplicar(Number(a), Number(b));
    res.send(`Resultado da multiplicação é = ${multiplicacao}`);
});

app.get('/dividir/:a/:b', (req, res) => {
    const { a, b } = req.params;
    const divisao = calc.dividir(Number(a), Number(b));
    res.send(`Resultado da divisão é = ${divisao}`);
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log('app rodando na porta ' + PORT);
});