document.querySelector('#insereConteudo').addEventListener('click', ()=>{

  //recuperar conteudo digitado
  const content = document.querySelector('#novosDados').value;

  //recuperar a div html
  const tag = document.querySelector('#novaTag');

  //criar um elemento h2 no js
  const newH2 = document.createElement('h2');

  //colocar no elemento h2, o que foi digitado pelo usuario
  newH2.textContent = content;

  //inserir css no elemento
  newH2.classList.add('bg-primary', 'text-light', 'my-3');
  
  //colocar na div o elemento h2 com o contéudo
  tag.appendChild(newH2);
});