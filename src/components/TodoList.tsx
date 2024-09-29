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
  const [task, setTask] = useState('')

  const handleNewTask = (event) => {
    setTask( event.target.value )
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if(task === '') return
    console.log({ task, isCompleted: false});
    console.log(todos);
    setTodos(todos => [...todos,{ task, isCompleted: false}])
    setTask('')
  }

  const handleRemoveTask = index => {
    console.log(index);
    const newTodos = [...todos]
    newTodos.splice(index,1)
    setTodos(newTodos)
  }

  return(
    <div>
      <h1 className="text-3xl font-bold underline">Todo List</h1>
      <form onSubmit={handleSubmit} class="mt-4">
        Add Task　:　
        <input 
          value={ task } 
          placeholder="Add New Task" 
          class="input input-bordered input-sm w-full max-w-xs" 
          onChange={handleNewTask}
        />
        <button type="submit" class="btn btn-sm ml-2">Add</button>
      </form>
      <ul>
        { todos.map((todo, index) => (
          <li key={ index }>{ todo.task } <span onClick={() => handleRemoveTask(index)}>X</span></li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;