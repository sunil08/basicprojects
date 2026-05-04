import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from './Taskslice';

const Filters = () => {
    const filter = useSelector(state => state.task.filters);
    const dispatch = useDispatch();

    console.log(filter)
  return (
    <div className='filter'>
      <button onClick={() => dispatch(setFilter('all'))} className={`button ${filter === 'all' ? 'active' : ''}`}>All</button>
      <button onClick={() => dispatch(setFilter('completed'))} className={`button ${filter === 'completed' ? 'active' : ''}`}>Completed</button>
    </div>
  )
}

export default Filters
