function transporMatriz(m){
    console.log('Matriz \n')
    for(let i = 0; i < m.length; j++){
        let linha = "";
        
        for(let j = 0; j < m[i].length; j++){
            linha += m[i][j] + "\t";

        }
        console.log(linha);
    }

    console.log('\nTransposta\n');

    for(let j = 0; j < m[0].length; j++){
        let linha = "";
        for(let i = 0; i < m.length; i++){
            linha += m[i][j] + "\t";
        }
        console.log(linha);
    }
}

let matriz = [
    [1,2],
    [3,4],
    [5,6]
]

transporMatriz(matriz);