import Todo from '../../components/todo/Todo'

function TodoList({filteredTodos, onDeleteTodo, todoStatus}) {
  return (
    <div>
      {filteredTodos.map(todo => {
        return <Todo key={todo.id} 
        todo={todo} 
        onDeleteTodo={onDeleteTodo}
        todoStatus={todoStatus} 
      />
      })}
    </div>
  )
}

export default TodoList
