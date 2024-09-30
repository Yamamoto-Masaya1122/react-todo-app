import React from 'react';

const TodoList = ({ todos, setTodos}) => {
  const handleRemoveTask = index => {
    const newTodos = [...todos]
    newTodos.splice(index,1)
    setTodos(newTodos)
  }

  const handleUpdateTask = index => {
    let newTodos = todos.map((todo,todoIndex) => {
      if(todoIndex  === index){
          todo.isCompleted = !todo.isCompleted
      }
      return todo;
    })
    setTodos(newTodos);
  }

  return(
    <ul>
      { todos.map((todo, index) => (
        <li key={ index } 
            style={ todo.isCompleted === true ? {textDecorationLine: 'line-through'}:{}}
        >
          <input 
            type="checkbox"
            checked={todo.isCompleted}
            onChange={() => handleUpdateTask(index)}
          />
          { todo.task } 
          <span 
            onClick={() => handleRemoveTask(index)}
            style={{ cursor: 'pointer' }}
          >
            X
          </span>
        </li>
      ))
      }
    </ul>
  );
}

export default TodoList;