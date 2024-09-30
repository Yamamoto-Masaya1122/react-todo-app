import { useState } from 'react';

const AddTodo = ({ setTodos }) => {
  const [task, setTask] = useState('')

  const handleNewTask = (event) => {
    setTask( event.target.value )
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if(task === '') return
    console.log({ task, isCompleted: false});
    setTodos(todos => [...todos,{ task, isCompleted: false}])
    setTask('')
  }

  return(
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
  );
}; 

export default AddTodo;