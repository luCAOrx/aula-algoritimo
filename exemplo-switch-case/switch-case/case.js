let animal = prompt('digite um animal')
let auxiliar = animal;

auxiliar = animal;
switch (animal) {
    case 'Vaca':
        alert('esse ira ao jantar')
        break;
    case 'Girafa':
        alert('Esse ira a casa')
        break;
    case 'Cachorro':
        alert('Esse ira ao shopping')
        break;
    case 'Porco':
        alert('Esse animal irá para Arca de Noé');
        break;
    case 'Dinossauro':
        alert('Esse ira jogar bola');
    default:
        alert('Esse animal não vai.');
}