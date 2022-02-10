import  Modal  from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

//Pegar todos botões que existem com class check
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button =>{
  button.addEventListener("click", handleClick)
})

const deleteButton = document.querySelectorAll(".actions .delete")

deleteButton.forEach(button =>{
  button.addEventListener("click", (event) => handleClick(event, false))
})

function handleClick(event, check = true ){
  const text = check ? "Marcar como lida" : "Excluir"
  modalTitle.innerHTML = `${text} esta pergunta`
  modalDescription.innerHTML =`Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`

  //Abrir modal
  modal.open()
}