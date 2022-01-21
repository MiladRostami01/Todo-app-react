import React from 'react'
import styled from 'styled-components'

function Todo({todo, onDeleteTodo, todoStatus}) {

  const doneStyle = {
    textDecoration: "line-through",
    opacity: 0.5,
    color: todo.color,
    background: todo.background,
  }
  const usuleStyle = {
    color: todo.color,
    background: todo.background,
  }
  const btnStyle = {
    background: todo.color,
  }

  return (
    <TodoStyle style={usuleStyle}>
      <h3 
        style={todo.completed ? doneStyle : usuleStyle } 
      >
      {todo.title}
      </h3>
      <div>
        <button style={btnStyle} onClick={() => todoStatus(todo.id)}>✔</button>
        <button style={btnStyle} onClick={() => onDeleteTodo(todo.id)}>×</button>
      </div>
    </TodoStyle>
  )
}

export default Todo

const TodoStyle = styled.div`
  margin: 30px 100px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  font-size: 22px;
  border-radius: 10px;
  h3{
    -webkit-user-select: none; /* Safari */        
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */
  }

  button{
    width:40px;
    height: 40px;
    border-radius: 50%;
    color: red;
    font-size: 30px;
    border: none;
    cursor: pointer;
    background: none ;
    -webkit-user-select: none; /* Safari */        
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */
    color: #f1eff6;
    margin: 0px 10px
  }

  div{
    display: flex;
    align-items: center;
  }
`
