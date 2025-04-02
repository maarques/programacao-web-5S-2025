const express = require('express');
const lista = require('./lista');
const app = express();

app.get('/adicionar/:id/:nome/:quantidade', (req, res) => {
    const { id, nome, quantidade } = req.params;
    lista.adicionar({ id: Number(id), nome, quantidade: Number(quantidade) });
    res.send(`Item adicionado: ${nome}`);
});

app.get('/remover/:id', (req, res) => {
    const { id } = req.params;
    lista.remover(Numeber(id));
    res.send(`Item removido: ${id}`);
});

app.get('/listar', (req, res) => {
    const listaCompleta = lista.listar();
    res.send(listaCompleta);
});

app.get('/editar/:id/:quantidade', (req, res) => {
    const { id, quantidade } = req.params;
    lista.editar(Number(id), Number(quantidade));
    res.send(`'Item editado: ${id}, nova quantidade: ${quantidade}`);
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log('app rodando na porta ' + PORT);
});
