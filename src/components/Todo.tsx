import { useState } from 'react';
import AddTodo from './AddTodo.tsx';
import TodoList from './TodoList.tsx';

const Todo = () => {
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

  return (
    <div>
      <h1 className="text-3xl font-bold underline">ToDo List</h1>
      <AddTodo setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default Todo;