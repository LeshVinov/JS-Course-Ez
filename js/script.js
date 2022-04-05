const todoControl = document.querySelector(".todo-control")
const headerInput = document.querySelector(".header-input")
const todoList = document.querySelector(".todo-list")
const todoCompleted = document.querySelector(".todo-completed")
const todoContainer = document.querySelector(".todo-container")

let toDoData = []

const render = function () {
  todoList.innerHTML = ""
  todoCompleted.innerHTML = ""

  toDoData.forEach(function (item, i) {
    const li = document.createElement("li")

    li.classList.add("todo-item")

    li.innerHTML =
      '<span class="text-todo">' +
      item.text +
      "</span>" +
      '<div class="todo-buttons">' +
      '<button class="todo-remove"></button>' +
      '<button class="todo-complete"></button>' +
      "</div>"

    if (item.completed) {
      todoCompleted.append(li)
    } else {
      todoList.append(li)
    }

    li.querySelector(".todo-complete").addEventListener("click", function () {
      item.completed = !item.completed
      render()
    })

    li.querySelector(".todo-remove").addEventListener("click", function () {
      li.remove()
      toDoData.splice(i, 1)
      render()
      localStorage.setItem("todoList", JSON.stringify(toDoData))
      if (toDoData.length === 0) {
        localStorage.clear()
      }
    })
    if (toDoData.length >= 1) {
      localStorage.setItem("todoList", JSON.stringify(toDoData))
    }
  })
}

const check = () => {
  toDoData = localStorage.getItem("todoList")
    ? JSON.parse(localStorage.getItem("todoList"))
    : []
  render()
}

todoControl.addEventListener("submit", function (event) {
  event.preventDefault()

  headerInput.value = headerInput.value.trim()

  if (headerInput.value.length !== 0) {
    const newToDo = {
      text: headerInput.value,
      completed: false,
    }

    toDoData.push(newToDo)

    headerInput.value = ""
    render()
  }
})
check()