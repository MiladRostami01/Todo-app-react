import React, {useRef} from 'react'
import {v4 as uuid4} from 'uuid'
import styled from 'styled-components'
import { useRandomColor } from '../../hooks/useRandomColor'

function TodoAdder({onAddTodo, selectStatusHandler, selectStatus}) {
  const inputRef = useRef("")
  const randColors = useRandomColor()

  const addHandler = () => {
    const newTodo = {
      id: uuid4(),
      title: inputRef.current.value,
      color: randColors.color,
      background: randColors.background,
      completed: false,
    }

    onAddTodo(newTodo)
    
    inputRef.current.value = ''
  }

  return (
    <ContainerStyle>
      <TodoAdderStyle>
        <Input type="text" placeholder='Enter your task' ref={inputRef}/>
        <Button onClick={addHandler}>+</Button> 
      </TodoAdderStyle>
      <FormStyle>
        <select value={selectStatus} onChange={selectStatusHandler}>
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Uncompleted">Uncompleted</option>
        </select>
      </FormStyle>
    </ContainerStyle>
  )
}

export default TodoAdder



//styled-component 
const ContainerStyle = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 30px 0px #00000022;
  padding: 20px;
  margin-top: 25px;
  border-radius: 5px;
`

const TodoAdderStyle = styled.div`
  width: 70%;
  height: 55px;
  position: relative;
  
`

const FormStyle = styled.form`
  width: 25%;
  height: 50px;
  margin-left: auto;

  select{
    width: 100%;
    height: 100%;
    margin: 0px auto;
    display: block;
    padding: 10px 20px;
    font-size: 20px;
    border-radius: 15px;
    background: #e8e5f4;
    border: 2px solid #403673;
    box-shadow: 0px 0px 20px 10px #e8e5f499;
    color: #403673;
    cursor: pointer;

    ::placeholder{
      color: #403673;
    }
  }
`

const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 10px 20px;
  font-size: 20px;
  border-radius: 15px;
  background: #e8e5f4;
  border: 2px solid #403673;
  box-shadow: 0px 0px 20px 10px #e8e5f499;
  color: #403673;

  ::placeholder{
    color: #403673;
  }
`
const Button = styled.button`
  width: 40px;
  height: 40px;
  font-size: 36px;
  border-radius: 50%;
  cursor: pointer;
  border: none;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  color: #f1eff6;
  background-color: #403673;
  box-shadow: 0px 0px 20px 0px #40367399;
`

