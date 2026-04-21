import React, { useState } from 'react'

const ToDoList = () => {

  const [dataList, setDataList] = useState([]);
  const [todo, setTodo] = useState("");

  function addNote(){
    if(todo !== ''){
      setDataList([...dataList, todo]); // This add the data synchronously
    }

    // setDataList((dataList) => { // this adds data asynchronously
    //   const updatedList = [...dataList, todo];
    //   console.log(updatedList);
    //   return updatedList;
    // })
    console.log(dataList);
  }

  function removeItem(index){
    const updatedList = dataList.filter((element, id) => {
      return index!=id;
    })
    setDataList(updatedList);
  }

  function removeAll(){
    setDataList([]);
  }

  return (
    <div>
      To do List
      <div>
        <input type='text' placeholder='Enter a note' onChange={(e) => setTodo(e.target.value)} value={todo}/>
        <button onClick={addNote}>Add Note</button>
        <p>Here is the list below:</p>
        {
          dataList!=[] && dataList.map((data, index) => {
              return (
                  <div key={index}>
                      {data}
                      <button onClick={() => removeItem(index)}>Remove</button>
                  </div>
              )
          })
        }
        <button onClick={removeAll}>Remove All</button>
      </div>
    </div>
  )
}

export default ToDoList
