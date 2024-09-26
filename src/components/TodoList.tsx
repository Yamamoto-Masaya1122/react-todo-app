import { useState } from 'react';

const TodoList = () => {
  const initialState = [
    {
      task: 'Learn vue.js',
      isCompleted: false
    },
    {
      task: 'Learn React Hook',
      isCompleted: false
    },
    {
        task: 'Learn Gatsby.js',
        isCompleted: false
    },  
  ]

  const [todos, setTodos] = useState(initialState);

  return(
    <div>
      <h1 className="text-3xl font-bold underline">Todo List</h1>
      <ul>
        { todos.map((todo, index) => (
          <li key={ index }>{ todo.task }</li>
        ))}
      </ul>
      <button className="btn btn-primary">Button</button>
    </div>
  );
}

export default TodoList;