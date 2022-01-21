import React, { useState, useEffect } from 'react'
import TodoAdder from '../components/todoAdder/TodoAdder'
import TodoList from '../components/todoList/TodoList'

function Todo() {
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])

  useEffect(() => {
    getLocalTodos()
  }, [])

  useEffect(() => {
    filteredTodoHandler()
    saveLocaTodos()
  }, [todos, status])

  function filteredTodoHandler() {
    switch (status) {
      case "Completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break
      case "Uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break
      default:
        setFilteredTodos(todos)
        break
    }
  }

// LocalStorage 
  const saveLocaTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }
  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]))
    } else{
      let todoLocal = JSON.parse(localStorage.getItem("todos"))
      setTodos(todoLocal)
    }
  }

  const selectStatusHandler = (e) => {
    setStatus(e.target.value)
  }

  const addTodoHandler = (newTodo) => {
    setTodos((prevTodo) => {
      return [...prevTodo, newTodo]
    })
  }

  const deleteTodoHandler = (id) => {
    const newTodo = todos.filter(todo => todo.id !== id)

    setTodos(newTodo)
  }

  const todoStatusHandler = (id) => {
    const newStatusTodos = [...todos]
    const indexTodo =  newStatusTodos.findIndex(todo => todo.id === id)

    const newTodo = {...todos[indexTodo]}

    newTodo.completed = !newTodo.completed

    newStatusTodos[indexTodo] = newTodo

    setTodos(newStatusTodos)
  }

  return (
    <div>
      <TodoAdder 
        onAddTodo={addTodoHandler} 
        selectStatusHandler={selectStatusHandler} 
        selectStatus={status}
      />
      <TodoList 
        filteredTodos={filteredTodos} 
        onDeleteTodo={deleteTodoHandler} 
        todoStatus={todoStatusHandler}
      />
    </div>
  )
}

export default Todo
