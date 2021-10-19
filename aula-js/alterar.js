// Digitar
// Clicar
// Alterar

// 1 - colocar no botão uma função
// 2 - pegar o que foi digitado 
// 3 - substituir o conteúdo pelo valor digitado

document.querySelector('#alterarConteudo').addEventListener('click', () => {

  // pegar o campo onde as informações foram digitadas
  // para pegar apenas o que foi digitado .value
  // sem o value, vai pegar a tag html
  const newContent = document.querySelector('#dados').value;
  // inserir na página, o novo conteudo 
  document.querySelector('#conteudo').textContent = newContent;
}); 