function ehNumero(numero) {
    return !isNaN(numero);
}
function somaVetor(vetor) {
    let soma = 0;
    for (let i = 0; i < vetor.length; i++) {
        if (ehNumero(vetor[i])) {
            soma += vetor [i];
        }
    }
<<<<<<< HEAD:exemplos/funcao.js
    return soma;
}

let numeros = ['te', 1, 5, 'wes', 2];
=======
    return numeros;
}
let soma = 0;
let numeros = ['te', 1,5, 'wes', 2];
>>>>>>> 04f29c8f1e5f875092c2e227b6ca380385390bf7:js/funcao.js
alert(somaVetor(numeros));