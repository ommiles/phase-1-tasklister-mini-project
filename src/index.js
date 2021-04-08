document.addEventListener("DOMContentLoaded", (e) => {

  const task = document.getElementById("create-task-form")
  const list = document.getElementById("tasks")
  
  task.addEventListener("submit", (e)=>{
    e.preventDefault()
    
    document.createElement(`list`)
    
    const addElement = () => {

      const text = e.target[0].value
      const grabLi = document.createElement("li");
      const newLi = grabLi.innerHTML

      list.appendChild(grabLi)
      
      grabLi.innerHTML = text

      return newLi
    }   
    return addElement()
  })
  
});