function gerarCombinação() {
  const numeros = [];

  // Gerando números de 1 a 25
  for (let i = 1; i <= 25; i++) {
    numeros.push(i);
  }

  // Embaralhando a lista de números
  for (let i = numeros.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numeros[i], numeros[j]] = [numeros[j], numeros[i]];
  }

  // Selecionando os primeiros 15 números embaralhados
  const combinacao = numeros.slice(0, 15);

  // Exibindo a combinação gerada na página
  const resultado = document.getElementById('resultado');
  resultado.innerText = 'Combinação de 15 números: ' + combinacao.join(', ');
}
