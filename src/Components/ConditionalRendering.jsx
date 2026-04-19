import React, { useEffect, useState } from 'react'

function AndLoggedIn(props){
    return <div>{props.loggedIn && <h1>&& - User is Logged In</h1>}</div>
}

function IfLoggedIn({loggedIn}){
    if(loggedIn){
        return <h1>If - User Logged In</h1>
    }
    return <h1>Please Log In</h1>
}

function SwitchLoggedIn({loggedIn}){
            switch (loggedIn) {
                case true:
                    return <h1>Switch LoggedIn</h1>
                default:
                    return <h1>Switch Logged Out</h1>
            }
}

function ArrayListConditions(){
    const array = ["apple", "mango", "banana"];

    // const fruitList = array.map((item, index) => {
    //     item.includes("a") ? <h3 key={index}>{item}</h3> : null
    // })
    // can also return (fruitlist)

    return(
        // div is required
        <div>
         {
            array.map((item, index) => 
            //{ these braces require implicit return e.g. { return item.includes("a") }
                item.includes("a") ? <h3 key={index}>{item}</h3> : null
            //}
            )
         }
        </div>
    )
}

function Component1(){
    return <h1>Logged In</h1>
}
function Component2(){
    return <h1>Logged Out</h1>
}
function ConditionalComponent({loggedIn}){
    if(loggedIn){
        // The component must be returned
        return <Component1/>
    }else{
        // The component must be returned
        return <Component2/>
    }
}

function UserAuthentication(){

    const [isAuthenticated, setAuthenticated] = useState(false);

    return (
        <div>
            {
                isAuthenticated ? <div> <h1>User Profile</h1> <h2>Username:React Coder</h2></div> : <button onClick={() => setAuthenticated(true)}> Login Please </button>
            }
        </div>
    )
}

function LoadingState(){
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
        setTimeout(()=> {
            setData("Data received..");
            setLoading(false);
        },3000)
    })

    return(
        <div>
            {
                loading ? <h2>Getting Data</h2> : <h2>{data}</h2> 
            }
        </div>
    )
}

function ConditionalRendering(props) {
    // Early return - conditional rendering
    // if(props.loggedIn){
    //     return(
    //         <h1>User Logged In</h1>
    //         // And below return statement will not return
    //     )
    // }
    return(
        <>
            <IfLoggedIn loggedIn = {props.loggedIn} />
            <AndLoggedIn loggedIn = {props.loggedIn} />
            <SwitchLoggedIn loggedIn={props.loggedIn} />
            <ArrayListConditions/>
            <ConditionalComponent loggedIn={props.loggedIn} />
            <UserAuthentication/>
            <LoadingState/>
        </>
    )
}

export default ConditionalRendering
