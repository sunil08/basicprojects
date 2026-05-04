import React from 'react'
import AddTask from './AddTask'
import './rtktodo.css'
import TaskList from './TaskList'
import Filters from './Filters'

const TaskManagerRTK = () => {
  return (
    <div className='container'>
        <h1>Task Manager</h1>
        <AddTask/>
        <Filters/>
        <TaskList/>
    </div>
  )
}

export default TaskManagerRTK
