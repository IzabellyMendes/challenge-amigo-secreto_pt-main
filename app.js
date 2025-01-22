let participante = [];
function adicionarAmigo() {
    let nomes = document.getElementById('amigo').value;
    if (nomes == ('')) {
        alert('Por favor, insira um nome.');
    }
    else {
        participante.push(nomes);
        limparInput();//limpa o campo do input
        listaAmigos();
    };

};
function limparInput() {
    document.getElementById('amigo').value = '';
}
function listaAmigos() {
    let exibirAmigos = document.getElementById('listaAmigos'); // Elemento onde a lista será exibida.
    exibirAmigos.innerHTML = '';
    participante.forEach(function (amigo) {
        let li = document.createElement('li'); // Criando um item de lista.
        li.textContent = amigo; // Definindo o nome do amigo no item da lista.
        exibirAmigos.appendChild(li); // Adicionando o item à lista HTML.
    })
};

function sortearAmigo(participante) {
    if (participante.length === 0) {
        alert('Não há amigos para sortear!');
        return;
    }
    let indiceSorteado = Math.floor(Math.random() * participante.length);

    let nomeSorteado = participante[indiceSorteado];
    participante.splice(indiceSorteado, 1);
    exibirResultado(nomeSorteado);
}

function exibirResultado(nomeSorteado) {
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    let li = document.createElement('li');
    li.textContent = `Amigo sorteado: ${nomeSorteado}`;
    resultado.appendChild(li);

}
