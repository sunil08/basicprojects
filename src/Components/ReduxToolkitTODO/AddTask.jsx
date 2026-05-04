import React, { useState } from 'react'
import './rtktodo.css'
import { useDispatch } from 'react-redux';
import { addTask } from './Taskslice';

const AddTask = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = (e) => {
    e.preventDefault(); // otherwise it will refresh the page when not used
    if(task){
        dispatch(addTask(task)); 
        setTask("");
    }
  }

  return (
    <form onSubmit={handleAddTask} className='form'>
        <input className='input' placeholder='Enter task' onChange={(e) => setTask(e.target.value)} value={task}/>
        <button className='button' type='submit'>Submit</button>
    </form>
  )
}

export default AddTask
