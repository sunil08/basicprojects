import React from 'react'
import './rtktodo.css'
import { useDispatch } from 'react-redux'
import { deleteTask, toggleTask } from './Taskslice';

const TaskItem = ({task}) => {
  const dispatch = useDispatch();

  return (
    <li className={`items ${task.completed ? 'completed' : ''}`}>
      {task.text}
      <div>
        <button onClick={() => dispatch(toggleTask(task.id))} className='button'>{task.completed ? "Undo" : "Done"}</button>
        <button onClick={() => dispatch(deleteTask(task.id))} className='button delete'>Delete</button>
      </div>
    </li>
  )
}

export default TaskItem

