let lista = [];

function adicionar(item) {
    lista.push(item);
    console.log(`Item adicionado: ${item.nome}`);
}

function remover(id) {
    if (lista.findIndex(item => item.id === id) >= 0) {
        lista = lista.filter(item => item.id !== id);
    }
    else {
        console.log("Item não encontrado: ");
    }
}

function listar() {
    lista.forEach(produto => {
        console.log(`ID: ${produto.id}, Nome: ${produto.nome}, Quantidade: ${produto.quantidade}`);
    });
}

function editar(id, novoQuantidade) {
    const item = lista.find(item => item.id === id);
    if (item) {
        item.quantidade = novoQuantidade;
        console.log(`Item editado: ${item.nome}, nova quantidade: ${novoQuantidade}`);
    } else {
        console.log("Item não encontrado: ");
    }
}

module.exports = {
    adicionar,
    remover,
    listar,
    editar
}