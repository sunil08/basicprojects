import React from 'react'

function SimpleList(){
    const items = ['Apple', 'Banana', 'Cherry'];

    return(
        <div>
            <h1>My Simple List</h1>
            {
                items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))
            }
        </div>
    )
}

function ListWithObjects(){ 
    const users = [
    { id: 1, name: 'Geeks', age: 30 },
    { id: 2, name: 'for', age: 25 },
    { id: 3, name: 'Geeks', age: 20 },
    ];

    return(
        <div>
            <h1>List with Objects</h1>
            {
                users.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))
            }
        </div>
    )
}

function ConditionalRenderingList(){
    const users = [
        { id: 1, name: 'Geeks', age: 30 },
        { id: 2, name: 'for', age: 25 },
        { id: 3, name: 'Geeky', age: 40 },
    ];

    return(
        <div>
            <h1>Conditional Rendering</h1>
            {
                users.map((item) => (
                    users.age > 30 ? 
                    <li key={item.id}>{item.name} is above 30</li> :
                    <li key={item.id}>{item.name} is below 30</li>
                ))
            }
        </div>
    )
}

function ListRendering() {
  return (
    <div>
      <SimpleList/>
      <ListWithObjects/>
      <ConditionalRenderingList/>
    </div>
  )
}

export default ListRendering
