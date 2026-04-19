import React from 'react'

function ChildProps(props){
    return(
        <div>{props.children}</div>
    )
}

function ChildrenProps() {
  return (
    // <div>
    //  <ChildProps data={"abcd"}>
    // We can also send children like above as props but both cannot be used i.e. data as above and tags as below. Preference will be given to inner ones.
      <ChildProps>
        <h1>Hello Children</h1>
        <h2>So many children</h2>
      </ChildProps>
    // </div>
  )
}

export default ChildrenProps
