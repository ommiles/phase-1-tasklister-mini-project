const ul = document.getElementById('tasks')
const form = document.getElementById('create-task-form')

form.addEventListener(`submit`, (e)=>{
  e.preventDefault()
  const capturesText = e.target[0].value
  const createLi = document.createElement("li")
  
  createLi.innerHTML = capturesText

  ul.appendChild(createLi)
  e.target.reset();
})