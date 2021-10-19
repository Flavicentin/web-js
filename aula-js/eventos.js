// 1 - pegar o elemento html
// 2 - atribuir um escutador de eventos ao elemento 
// 3 - definir qual evento que eu quero que ele escute 
// 4 - chamar a função

function mensagem() {
  alert("Olá alguem me chamou");
}

// //pegando o elemento HTML
// document.querySelector('#btn-1')
// documento.getElementById('btn-1')

// //escutador de eventos
// .addEventListener

// //definindo evento e chamando função
// ('click', mensagem); 

document.querySelector('#btn-1').addEventListener('click', mensagem);
document.querySelector('#btn-2').addEventListener('dblclick', mensagem);
document.getElementById('btn-3').addEventListener('mouseover', mensagem);
document.getElementById('btn-4').addEventListener('mouseout', mensagem);