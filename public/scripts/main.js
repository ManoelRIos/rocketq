import  Modal  from './modal.js'

const modal = Modal()

//Pegar todos botões que existem com class check
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button =>{
  button.addEventListener("click", event =>{
    console.log('click')
    modal.open()
  })
})

